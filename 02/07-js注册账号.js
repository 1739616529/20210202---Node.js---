const fs = require("fs");
const http = require("http");
const path = require("path");

const server = http
  .createServer((req, res) => {
    const { method, url } = req;
    if (method === "POST" && url === "./register") {
      res.setHeader("access-control-allow-origin", "*");
      res.setHeader("content-type", "text/html;charset=utf8");
      let str = "";
      req.on("data", (chuck) => (str += chuck));
      req.on("end", () => {
        const searchObj = new URLSearchParams(str);
        const userName = searchObj.get("userName");
        const userPwd = searchObj.get("userPwd");
      });
    }
  })
  .listen(3001, () => console.log("启动成功"));
