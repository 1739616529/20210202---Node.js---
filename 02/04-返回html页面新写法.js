const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http
  .createServer((req, res) => {
    const url = req.url;
    const htmlPath = path.join(__dirname,'/pages' ,url);
    console.log(htmlPath);
    fs.readFile(htmlPath, (err, data) => {
      if (err) return res.end('404 Not Found!')
      res.end(data);
    });
  })
  .listen(3000, () => {
    console.log("启动成功");
  });
