import { usesIsValidItem } from "./thing-that-uses-item-validator";
import { jest, test, expect } from "@jest/globals";

jest.mock("./items/etc/valid-items", () => ({
  validItems: () => [3, 4],
}));

test("Items are valid", () => {
  const isValid = usesIsValidItem(3);
  expect(isValid).toBeTruthy;
});

test("items are not valid", () => {
  const isValid = usesIsValidItem(1);
  expect(isValid).toBeFalsy;
});
