// 1. 一定要先导入fs模块
const ad = require("fs");

// 2. 读取文件
ad.readFile("./data/hero.json", (err, data) => {
  const res = data.toString();
  console.log(res);
  console.log(typeof res);
  const obj = JSON.parse(data);
  // 吧读取到的buffer转换成 JS对象
  console.log(obj);
  console.log(typeof obj);
});
