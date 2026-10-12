CREATE TABLE IF NOT EXISTS admin_order_events (
  id TEXT PRIMARY KEY NOT NULL,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  admin_user_id TEXT NOT NULL REFERENCES user(id),
  action TEXT NOT NULL CHECK (action IN ('confirm_payment', 'cancel')),
  from_status TEXT NOT NULL,
  to_status TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS admin_order_events_created_at
  ON admin_order_events (created_at DESC);
