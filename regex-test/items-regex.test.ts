import { jest, test, expect } from "@jest/globals";
import { itemsRegex } from "./items-regex";

jest.mock("./items", () => ({
  items: ["baz", "qux"],
}));

test("ItemsRegex", () => {
  expect(itemsRegex).toStrictEqual(/(baz|qux)/g);
});
