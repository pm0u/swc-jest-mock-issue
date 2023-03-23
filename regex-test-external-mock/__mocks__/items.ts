import { jest } from "@jest/globals";

jest.mock("../items", () => ({
  items: ["baz", "qux"],
}));
