import { items } from "./items";

export const itemsRegex = new RegExp(`(${items.join("|")})`, "g");
