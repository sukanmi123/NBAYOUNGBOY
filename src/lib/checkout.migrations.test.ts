import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

const migrationOne = readFileSync(resolve(process.cwd(), "migrations/0001_checkout.sql"), "utf8");
const migrationTwo = readFileSync(
  resolve(process.cwd(), "migrations/0002_normalize_checkout_data.sql"),
  "utf8",
);
const migrationThree = readFileSync(
  resolve(process.cwd(), "migrations/0003_chime_manual_payment.sql"),
  "utf8",
);

describe("checkout D1 migrations", () => {
  let database: DatabaseSync;

  beforeEach(() => {
    database = new DatabaseSync(":memory:");
  });

  afterEach(() => {
    database.close();
  });

  it("normalizes existing orders, shipping details, and line items", () => {
    database.exec(migrationOne);
    database
      .prepare(
        `INSERT INTO orders
        (id, order_number, customer_email, shipping_json, items_json, total_cents, payment_method, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .run(
        "order-1",
        "YB-ORDER-1",
        "customer@example.com",
        JSON.stringify({
          name: "Customer",
          email: "customer@example.com",
          phone: "",
          address: "1 Main St",
          addressLine2: "",
          city: "Sample City",
          region: "CA",
          postalCode: "90001",
          country: "US",
        }),
        JSON.stringify([
          { productId: 11, name: "Tee", size: "M", quantity: 1, unitPriceCents: 12000 },
        ]),
        12000,
        "venmo",
        "pending_verification",
      );

    database.exec(migrationTwo);
    database.exec(migrationThree);

    expect(
      database.prepare("SELECT * FROM order_shipping_details WHERE order_id = ?").get("order-1"),
    ).toMatchObject({
      name: "Customer",
      email: "customer@example.com",
      address: "1 Main St",
      country: "US",
    });
    expect(
      database.prepare("SELECT * FROM order_items WHERE order_id = ?").get("order-1"),
    ).toMatchObject({
      product_id: 11,
      name: "Tee",
      size: "M",
      quantity: 1,
      unit_price_cents: 12000,
    });
    expect(
      database.prepare("SELECT status, payment_method FROM orders WHERE id = ?").get("order-1"),
    ).toMatchObject({
      status: "pending_verification",
      payment_method: "venmo",
    });
    const orderColumns = database
      .prepare("PRAGMA table_info(orders)")
      .all()
      .map((column) => column.name);
    expect(orderColumns).not.toContain("shipping_json");
    expect(orderColumns).not.toContain("customer_email");
    expect(orderColumns).not.toContain("items_json");
  });

  it("does not create a second paid order when a gift-card balance is already redeemed", () => {
    database.exec(migrationOne);
    database.exec(migrationTwo);
    database.exec(migrationThree);
    database
      .prepare("INSERT INTO gift_cards (id, code_hash, balance_cents) VALUES (?, ?, ?)")
      .run("gift-1", "hash", 500);

    const redeem = (orderId: string, orderNumber: string) => {
      database.exec("BEGIN IMMEDIATE");
      const results = [
        database
          .prepare(
            `UPDATE gift_cards
           SET balance_cents = balance_cents - ?, last_redemption_token = ?
           WHERE code_hash = ? AND status = 'active' AND balance_cents >= ?`,
          )
          .run(500, orderId, "hash", 500),
        database
          .prepare(
            `INSERT INTO orders (id, order_number, total_cents, payment_method, status)
           SELECT ?, ?, ?, 'gift_card', 'paid'
           WHERE EXISTS (
             SELECT 1 FROM gift_cards
             WHERE code_hash = ? AND status = 'active' AND last_redemption_token = ?
           )`,
          )
          .run(orderId, orderNumber, 500, "hash", orderId),
        database
          .prepare(
            `INSERT INTO order_shipping_details
           (order_id, name, email, address, city, region, postal_code, country)
           SELECT ?, 'Customer', 'customer@example.com', '1 Main St', 'Sample City', 'CA', '90001', 'US'
           WHERE EXISTS (SELECT 1 FROM orders WHERE id = ?)`,
          )
          .run(orderId, orderId),
        database
          .prepare(
            `INSERT INTO order_items (order_id, product_id, name, size, quantity, unit_price_cents)
           SELECT ?, 11, 'Tee', 'M', 1, 500
           WHERE EXISTS (SELECT 1 FROM orders WHERE id = ?)`,
          )
          .run(orderId, orderId),
      ];
      database.exec("COMMIT");
      return results.map((result) => result.changes);
    };

    expect(redeem("order-1", "YB-ORDER-1")).toEqual([1, 1, 1, 1]);
    expect(redeem("order-2", "YB-ORDER-2")).toEqual([0, 0, 0, 0]);
    expect(
      database.prepare("SELECT balance_cents FROM gift_cards WHERE id = ?").get("gift-1"),
    ).toMatchObject({
      balance_cents: 0,
    });
    expect(database.prepare("SELECT COUNT(*) AS count FROM orders").get()).toMatchObject({
      count: 1,
    });
  });

  it("records a customer-reported Chime payment as pending, never paid", () => {
    database.exec(migrationOne);
    database.exec(migrationTwo);
    database.exec(migrationThree);
    database
      .prepare(
        `INSERT INTO orders
          (id, order_number, total_cents, payment_method, status, confirmation_token_hash)
         VALUES (?, ?, ?, 'chime', 'awaiting_payment', ?)`,
      )
      .run("chime-order", "YB-CHIME-1", 20000, "token-hash");

    const result = database
      .prepare(
        `UPDATE orders
         SET status = 'pending_payment',
             payment_reference = order_number,
             payment_submitted_at = CURRENT_TIMESTAMP
         WHERE order_number = ?
           AND payment_method = 'chime'
           AND status = 'awaiting_payment'
           AND confirmation_token_hash = ?`,
      )
      .run("YB-CHIME-1", "token-hash");

    expect(result.changes).toBe(1);
    expect(
      database
        .prepare(
          "SELECT status, payment_method, payment_reference, payment_submitted_at FROM orders WHERE id = ?",
        )
        .get("chime-order"),
    ).toMatchObject({
      status: "pending_payment",
      payment_method: "chime",
      payment_reference: "YB-CHIME-1",
    });
  });
});
