const fs = require('fs')
fs.readFile('./data/hero.0json' , (err , data)=>{
  if(err) return console.log('输入错误请从试');
  console.log(data);
})