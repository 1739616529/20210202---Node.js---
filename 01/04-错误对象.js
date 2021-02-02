const fs = require("fs");
fs.readFile("data/hero.json", (err, data) => {
  console.log(err); // 正常情况下是nul
  console.log(data);
});
