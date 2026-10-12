# Checkout setup

Checkout supports Venmo, Chime, and emailed e-gift cards. Venmo orders are stored as `pending_verification`. Chime and gift card orders start as `awaiting_payment`; after the customer reports sending payment, the order becomes `pending_payment`, with the order number stored as its payment reference and the submission timestamp recorded. Customer reports are not proof of payment: manually verify the actual Chime transfer or gift card delivery and value before changing the order to `paid` or `processing`. E-gift cards should be sent to `dajourw89@gmail.com` for the exact order total.

The Worker reads `PAYMENTS_DB` from Nitro's per-request Cloudflare runtime binding (`request.runtime.cloudflare.env`). The binding name is case-sensitive and must be exactly `PAYMENTS_DB`. `wrangler.jsonc` declares this binding, and the production build carries it into `.output/server/wrangler.json`. The checked-in database ID is intentionally a placeholder; a real ID must come from the Cloudflare account that owns the database.

## Configure Cloudflare D1 in the dashboard

1. In Cloudflare, open **Storage & databases → D1 SQL database → Create database**. Name it `youngboy-shop-payments`.
2. Open **Workers & Pages**, select the deployed shop Worker, then open **Settings → Bindings → Add → D1 database**.
3. Set the binding name/variable to exactly `PAYMENTS_DB`, select `youngboy-shop-payments`, and save. Add the binding to the production environment (and preview environments separately if you use them).
4. Copy the database's real **Database ID** from its D1 overview into `wrangler.jsonc`, replacing `REPLACE_WITH_CLOUDFLARE_D1_DATABASE_ID`. Do not guess this value. Keep the configuration file and dashboard binding pointed at the same database.
5. With Wrangler authenticated to the same Cloudflare account, apply both migrations in order by running `npx wrangler d1 migrations apply youngboy-shop-payments --remote`. Do not manually run the migration files in the D1 SQL Console and then use Wrangler later; Wrangler tracks applied migration versions.
6. The default public Venmo username is `@Leshonda-Jenkins-2`, and `VENMO_USERNAME` is set to the same value in `wrangler.jsonc`. The configured `CHIME_DESTINATION` is `$Leshonda-Jenkins-2`; set the same value under **Settings → Variables and Secrets** if Cloudflare dashboard variables override Wrangler configuration. These are public payment destinations, not passwords or credentials.
7. Save and deploy/redeploy the Worker so it receives the binding and variables. Keep the Worker dashboard binding and `wrangler.jsonc` pointed at the same database.
8. Open checkout and select each method. A missing binding produces a clear setup error and no order is placed. Send a low-value e-gift card to the configured recipient email to confirm that delivery and manual verification work before enabling customer purchases.

The same file can configure local Wrangler development. After setting a real database ID, install/use Wrangler and run `npx wrangler d1 migrations apply youngboy-shop-payments --local`; then start the Cloudflare Worker locally with Wrangler so the D1 binding is available. Plain `vite dev` is not a configured D1 environment.

The checked-in `.asset.json` files point at media stored by Lovable. For standalone Cloudflare deployments, keep the matching files under `public/__l5e/assets-v1/<asset-id>/<filename>` so the imported asset URLs are served locally by the Worker rather than depending on Lovable's asset host.

`0002_normalize_checkout_data.sql` moves existing shipping addresses and line items into `order_shipping_details` and `order_items`, adds a one-use gift-card redemption token, and removes duplicate customer/shipping/item JSON fields from `orders`. `0003_chime_manual_payment.sql` adds the `awaiting_payment` and `pending_payment` states, payment reference/submission fields, and a single-use confirmation token for the customer report action.

## Legacy store gift card codes

The shop no longer redeems locally issued store gift card codes during checkout. Existing `gift_cards` rows and `scripts/create-gift-card.mjs` are retained for reference but are not used by the current gift card payment flow.

## Verify manual payment orders

Review orders in the authenticated Cloudflare D1 console. Treat `pending_verification` and `pending_payment` as unverified customer reports. Confirm the incoming Venmo transfer, Chime payment, or e-gift card delivered to the recipient email, including amount and order reference, before changing status to `paid` or `processing`. For example:

```sql
UPDATE orders
SET status = 'processing'
WHERE order_number = 'YB-REPLACE-WITH-ORDER-NUMBER'
  AND payment_method = 'chime'
  AND status = 'pending_payment';
```

Do not treat a customer-provided message or screenshot as payment verification. No public order-status or payment-verification endpoint is exposed.
