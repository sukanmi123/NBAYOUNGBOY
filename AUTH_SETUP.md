# Accounts and admin dashboard setup

The store now requires a customer account to browse or check out. Accounts and sessions are stored in the existing `PAYMENTS_DB` D1 database. The admin dashboard at `/admin` shows the total number of registered accounts; it does not expose passwords.

## Set the private authentication secret

Generate a unique secret in PowerShell:

```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
```

For production, run `npx wrangler secret put BETTER_AUTH_SECRET` from the project folder and paste the generated value when Wrangler asks. For local Wrangler development, put the same kind of generated value in the ignored `.dev.vars` file:

```text
BETTER_AUTH_SECRET=put-your-generated-value-here
```

Never commit or share the secret. The Worker must be redeployed after adding it.

## Apply the account tables

Run the new migration against the production D1 database:

```powershell
npx wrangler d1 migrations apply youngboy-shop-payments --remote
```

For local Wrangler development, use `--local` instead. Start the app using Wrangler so the Worker receives `PAYMENTS_DB` and `BETTER_AUTH_SECRET`; plain `npm run dev` does not provide those bindings.

## Create the owner account and grant admin access

1. Open the Worker site and create your account at `/login`.
2. In Cloudflare, open the D1 database SQL console for `youngboy-shop-payments` and run the following, replacing the e-mail with the exact address used for your account:

```sql
UPDATE user SET role = 'admin' WHERE email = 'your-admin-email@example.com';
```

3. Sign out and sign in again, then open `/admin`.

Only grant this role to an account you control. Customer registration does not grant admin access. The admin dashboard count is the number of registered accounts, rather than the number currently online.
