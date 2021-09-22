const fs = require('fs')
const path = require('path')



fs.writeFile('data.txt','node',{
    mode:438,
    flag: 'r+',//r+ 不会清空之前的数据，w+会清空重新写入
    encoding: 'utf-8'
},(err)=>{
    console.log(err);
    fs.readFile(path.resolve('data.txt'),'utf-8',(err,data)=>{
        console.log(data);
    })
})