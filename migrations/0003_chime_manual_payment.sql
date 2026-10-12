CREATE TABLE orders_rebuild (
  id TEXT PRIMARY KEY,
  order_number TEXT NOT NULL UNIQUE,
  total_cents INTEGER NOT NULL CHECK (total_cents > 0),
  payment_method TEXT NOT NULL CHECK (payment_method IN ('venmo', 'chime', 'gift_card')),
  status TEXT NOT NULL CHECK (
    status IN ('awaiting_payment', 'pending_payment', 'pending_verification', 'paid', 'processing', 'cancelled', 'refunded')
  ),
  payment_reference TEXT,
  payment_submitted_at TEXT,
  confirmation_token_hash TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO orders_rebuild
  (id, order_number, total_cents, payment_method, status, created_at)
SELECT id, order_number, total_cents, payment_method, status, created_at
FROM orders;

CREATE TABLE order_shipping_details_backup AS SELECT * FROM order_shipping_details;
CREATE TABLE order_items_backup AS SELECT * FROM order_items;
DROP TABLE order_shipping_details;
DROP TABLE order_items;
DROP TABLE orders;
ALTER TABLE orders_rebuild RENAME TO orders;

CREATE TABLE order_shipping_details (
  order_id TEXT PRIMARY KEY REFERENCES orders(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  address TEXT NOT NULL,
  address_line2 TEXT NOT NULL DEFAULT '',
  city TEXT NOT NULL,
  region TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  country TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO order_shipping_details
  (order_id, name, email, phone, address, address_line2, city, region, postal_code, country, created_at)
SELECT
  order_id, name, email, phone, address, address_line2, city, region, postal_code, country, created_at
FROM order_shipping_details_backup;

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  size TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price_cents INTEGER NOT NULL CHECK (unit_price_cents > 0)
);

INSERT INTO order_items (id, order_id, product_id, name, size, quantity, unit_price_cents)
SELECT id, order_id, product_id, name, size, quantity, unit_price_cents
FROM order_items_backup;

DROP TABLE order_shipping_details_backup;
DROP TABLE order_items_backup;

CREATE INDEX orders_status_created_at ON orders (status, created_at);
CREATE INDEX orders_payment_method_reference ON orders (payment_method, payment_reference);
