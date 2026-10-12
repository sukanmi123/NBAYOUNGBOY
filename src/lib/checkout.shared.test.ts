import { describe, expect, it } from "vitest";

import { paymentMethods, VENMO_USERNAME } from "./checkout.shared";

describe("checkout payment methods", () => {
  it("offers only Venmo, Chime, and Gift Card", () => {
    expect(paymentMethods.map(({ id }) => id)).toEqual(["venmo", "chime", "gift_card"]);
  });

  it("uses the provided Venmo username as the default payment destination", () => {
    expect(VENMO_USERNAME).toBe("@Leshonda-Jenkins-2");
  });
});
