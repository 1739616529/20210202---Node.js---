const fs = require("fs");
fs.readFile("./data/hero.json", "utf8", (err, data) => {
  // fs.readFile()中可以放三个参数   中间的可以不填
  if (err) return console.log("读取错误");
  console.log(data);
});
