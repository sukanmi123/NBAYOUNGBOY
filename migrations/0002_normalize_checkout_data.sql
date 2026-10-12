ALTER TABLE gift_cards ADD COLUMN last_redemption_token TEXT;

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

INSERT OR IGNORE INTO order_shipping_details
  (order_id, name, email, phone, address, address_line2, city, region, postal_code, country)
SELECT
  id,
  json_extract(shipping_json, '$.name'),
  json_extract(shipping_json, '$.email'),
  COALESCE(json_extract(shipping_json, '$.phone'), ''),
  json_extract(shipping_json, '$.address'),
  COALESCE(json_extract(shipping_json, '$.addressLine2'), ''),
  json_extract(shipping_json, '$.city'),
  json_extract(shipping_json, '$.region'),
  json_extract(shipping_json, '$.postalCode'),
  json_extract(shipping_json, '$.country')
FROM orders
WHERE json_valid(shipping_json);

CREATE TABLE order_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  size TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  unit_price_cents INTEGER NOT NULL CHECK (unit_price_cents > 0)
);

INSERT INTO order_items
  (order_id, product_id, name, size, quantity, unit_price_cents)
SELECT
  orders.id,
  json_extract(item.value, '$.productId'),
  json_extract(item.value, '$.name'),
  json_extract(item.value, '$.size'),
  json_extract(item.value, '$.quantity'),
  json_extract(item.value, '$.unitPriceCents')
FROM orders, json_each(orders.items_json) AS item
WHERE json_valid(orders.items_json);

ALTER TABLE orders DROP COLUMN customer_email;
ALTER TABLE orders DROP COLUMN shipping_json;
ALTER TABLE orders DROP COLUMN items_json;
