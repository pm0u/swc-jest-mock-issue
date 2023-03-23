import { isValidItem } from "./item-validator";
import { jest, test, expect } from "@jest/globals";

jest.mock("./etc/valid-items", () => ({
  validItems: () => [3, 4],
}));

test("Items are valid", () => {
  const isValid = isValidItem(3);
  expect(isValid).toBeTruthy;
});

test("items are not valid", () => {
  const isValid = isValidItem(1);
  expect(isValid).toBeFalsy;
});
