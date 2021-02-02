const path = require("path");
const path1 = "D:\\HTML";
const path2 = "./20210202   Node.js 学习 ";
// 如果想返回上一级  就添加../ const path2 = "../20210202   Node.js 学习 ";
const newPath = path.join(path1, path2);

console.log(newPath);

//当前路径往上退三级

const fileP = path.join(__dirname, "../../../");
//退几级填几个../
console.log(fileP);

const fileP2 = path.join(__dirname , '/data')
//进路径就添加/和路径名
console.log(fileP2);
