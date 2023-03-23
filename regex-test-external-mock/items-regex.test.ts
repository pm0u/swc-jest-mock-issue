import "./__mocks__/items";
import { test, expect } from "@jest/globals";
import { itemsRegex } from "./items-regex";

test("ItemsRegex", () => {
  expect(itemsRegex).toStrictEqual(/(baz|qux)/g);
});
