const fs = require("fs");
const http = require("http");
const path = require("path");
const heroPath = path.join(__dirname, "./data/hero.json");
const server = http
  .createServer((req, res) => {
    const { url, method } = req;
    if (method === "GET" && url.startsWith("/getHeroById")) {
      const [, search] = url.split("?");
      //根据? 来截取
      const searchObj = new URLSearchParams(search);
      //用URLSearchParams转成对象
      const id = searchObj.get("id");
      //用get获取对象的id值
      console.log(id);
      fs.readFile(heroPath, (err, data) => {
        if (err) return res.end("获取失败");
        const heroArr = JSON.parse(data);
        const heroItem = heroArr[id - 1];
        res.setHeader("content-type", "text/html;charset=utf8");
        res.end(JSON.stringify(heroItem));
      });
    }
  })
  .listen(3001, () => console.log("启动成功"));
