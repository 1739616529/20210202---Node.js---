const http = require("http");

//创建服务器
const server = http.createServer((req, res) => {
  console.log(req.url);

  res.end("服务器响应给浏览器的数据");
});

server.listen(3000, () => {
  console.log("服务器启动端口：3000");
});
