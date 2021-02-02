const fs = require("fs");
fs.readFile("./02.txt", (err, data) => {
  console.log(data);
  //如果直接logdata   显示的是buffer   缓冲区
  console.log(data.toString());
  // 要用toString转换成熟悉的字符串
});
