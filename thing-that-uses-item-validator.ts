import { isValidItem } from "./items/item-validator";

export const usesIsValidItem = (item: number) => {
  return isValidItem(item);
};
