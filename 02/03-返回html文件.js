const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http
  .createServer((req, res) => {
    const { url } = req;
    if (url === "/index.html" || url === "/") {
      const htmlPath = path.join(__dirname, "./pages/index.html");
      fs.readFile(htmlPath, (err, data) => {
        if (err) return res.end("Error");
        // console.log(data);
        res.end(data);
      });
    } else {
      const htmlPath = path.join(__dirname, "./pages/404.html");
      fs.readFile(htmlPath, (err, data) => {
        if (err) return res.end("Error");
        // console.log(data);
        res.end(data);
      });
    }

    // console.log("执行");
    //这个log不会直接触发  是要刘凯蓝旗发送请求才会执行
  })
  .listen(3000, () => {
    console.log("服务器启动成功");
  });
