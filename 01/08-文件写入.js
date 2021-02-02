const fs = require("fs");
fs.writeFile("data/01.txt", "瓜皮", (err) => {
  // writeFile()  内部三个参数    文件相对路径      需要写入的内容     回调函数
  if (err) return console.log("写入失败");
  
  console.log("写入成功");
});
