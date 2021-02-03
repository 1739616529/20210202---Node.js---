const http = require("http");
const server = http.createServer((req, res) => {
  res.end("111");
  //返回值必须是字符串或者buffer格式
});
server.listen(3000, () => {
  console.log("服务器启动成功");
});
