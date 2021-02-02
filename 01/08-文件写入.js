const fs = require("fs");
let heroList = [
  { id: 1, name: "武则天", gender: "女" },
  { id: 2, name: "王昭君", gender: "女" },
];
fs.writeFile("data/01.txt", JSON.stringify(heroList), (err) => {
  // writeFile()  内部三个参数    文件相对路径      需要写入的内容     回调函数
  if (err) return console.log("写入失败");

  console.log("写入成功");
});
fs.readFile("data/01.txt", (err, data) => {
  console.log(JSON.stringify(data));
});
