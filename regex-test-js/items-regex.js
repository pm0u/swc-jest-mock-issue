const { items } = require("./items");

module.exports = {
  itemsRegex: new RegExp(`(${items.join("|")})`, "g"),
};
