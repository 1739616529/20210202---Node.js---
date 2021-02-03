const http = require("http");
const fs = require("fs");
const path = require("path");

const heroPath = path.join(__dirname, "./data/hero.json");
require("http")
  .createServer((req, res) => {
    const { url, method } = req;
    if (method === "GET" && url === "/getHeroList") {
      fs.readFile(heroPath, (err, data) => {
        if (err) return res.end("ERROR");
        const heroArr = JSON.parse(data);

        res.setHeader("Content-type", "application/json;charset=utf8");
        res.end(`
        {
          "code": 200,
          "msg": "请求成功",
          "data": ${JSON.stringify(heroArr)}
        }
        `);
      });
    }
  })
  .listen(3001, () => console.log("启动成功"));
