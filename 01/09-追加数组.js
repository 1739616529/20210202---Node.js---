const fs = require("fs");

const list = { id: 4, name: "瓜皮", gender: "男" };
fs.readFile("./data/hero.json", (err, data) => {
  if (err) return console.log("获取文件失败");
  const arr = JSON.parse(data);

  arr.push(list);

  const str = JSON.stringify(arr, null, 2);
  fs.writeFile("data/hero.json", str, (err) => {
    if (err) console.log("添加英雄失败");
    console.log("添加英雄成功");
  });
});
fs.readFile("data/hero.json", (err, data) => {
  console.log(JSON.parse(data));
});
