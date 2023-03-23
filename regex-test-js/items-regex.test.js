const { itemsRegex } = require("./items-regex");

jest.mock("./items", () => ({
  items: ["baz", "qux"],
}));

test("ItemsRegex", () => {
  expect(itemsRegex).toStrictEqual(/(baz|qux)/g);
});
