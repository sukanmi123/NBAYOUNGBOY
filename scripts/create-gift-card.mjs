import { createHash, randomBytes, randomUUID } from "node:crypto";

const amount = process.argv[2];
if (!amount || !/^\d+(\.\d{1,2})?$/.test(amount)) {
  console.error("Usage: node scripts/create-gift-card.mjs <amount-in-dollars>");
  process.exitCode = 1;
} else {
  const balanceCents = Math.round(Number(amount) * 100);
  if (!Number.isSafeInteger(balanceCents) || balanceCents <= 0) {
    console.error("Gift card amount must be a positive, safe number of cents.");
    process.exitCode = 1;
  } else {
    const code = randomBytes(24).toString("hex").toUpperCase();
    const codeHash = createHash("sha256")
      .update(code.replace(/\s+/g, "").toUpperCase())
      .digest("hex");
    const id = randomUUID();
    console.log(
      `Gift card code (save and provide this privately; it cannot be recovered):\n${code}\n`,
    );
    console.log("Insert this SQL into the Cloudflare D1 console:");
    console.log(
      `INSERT INTO gift_cards (id, code_hash, balance_cents) VALUES ('${id}', '${codeHash}', ${balanceCents});`,
    );
  }
}
