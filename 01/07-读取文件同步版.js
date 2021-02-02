const fs = require("fs");
const data = fs.readFileSync("./data/hero.json");
// readFileSync() 同步写法 顺序不会乱  但是效率低  会先获取上一个文件才会获取下一个文件
console.log(JSON.parse(data));
