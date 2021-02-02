const fs = require("fs");
const data = fs.readFileSync("./data/hero.json");
console.log(JSON.parse(data));
