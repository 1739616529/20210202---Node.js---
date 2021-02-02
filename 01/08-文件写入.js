const fs = require("fs");
fs.writeFile("data/01.txt", "瓜皮", (err) => {
  if (err) return console.log("写入失败");
  console.log("写入成功");
});
