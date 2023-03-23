import { getValidItems } from "./etc/valid-items";

export const isValidItem = (item: number) => {
  const validItems = getValidItems();
  return validItems.includes(item);
};
