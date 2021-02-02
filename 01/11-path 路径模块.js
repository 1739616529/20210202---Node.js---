const path = require("path");
const path1 = "D:\\HTML";
const path2 = "./20210202   Node.js 学习 ";
// 如果想返回上一级  就添加../ const path2 = "../20210202   Node.js 学习 ";
const newPath = path.join(path1, path2);

console.log(newPath);