const http = require("http");
const path = require("path");
const heroPath = path.join(__dirname, "./data/hero.json");
// const server =
require("http")
  .createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if (url === "/hero") {
      require("fs").readFile(heroPath, (err, data) => {
        if (err) return res.end("server Error");
        // console.log(JSON.parse(data));
        const heroArr = JSON.parse(data);

        const index = Math.floor(Math.random() * heroArr.length);
        const heroItem = heroArr[index];
        const heroItemStr = JSON.stringify(heroItem);
        res.setHeader("content-type", "text/html;charset=utf8");
        //响应头   给浏览器看的
        res.end(heroItemStr);
      });
    } else if (url === "/") {
      res.end("Welcome");
    } else if (url === "/joke") {
      res.end("jokeList");
    } else {
      res.end("404 Not Found");
    }
  })
  .listen(3000, () => console.log("服务器开启成功"));
//服务器的本质就是分支判断
//分支的res.end()返回值只能写一个  写两个或多个会报错 不写也不行

// server.listen(3000, () => console.log("服务器开启成功"));
