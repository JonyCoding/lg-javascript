#!/usr/bin/env Node

// node cli应用必须要有这样的文件头
// 如果是linux或者mac还需要将读写权限修改为 755
// 具体就是通过 chmod 755 cli.js 实现修改

console.log("cli working")
// 脚手架的工作过程
// 1、通过命令行交互询问用户问题
// 2、根据用户回答的结果生成文件
const path = require('path')
const fs = require('fs')
const inquirer = require('inquirer');
const ejs = require('ejs')

inquirer.prompt([{
    type:'input',
    name:'name',
    message:'project name?',

}]).then(res=>{
    console.log(res);
    //模版目录
    const tmplDir = path.join(__dirname,'templates')
    // 目标目录
    const destDir = process.cwd()

    //将模版下全部文件转到目标目录
    fs.readdir(tmplDir,(err,files)=>{
        if(err) throw err
        files.forEach(file => {
            console.log(file);
            // 通过模板引擎渲染对应的文件
            ejs.renderFile(path.join(tmplDir,file),res,(err,result)=>{
                if(err) throw err
                // 将结果写入目标文件
                fs.writeFileSync(path.join(destDir,file),result)
            })
        });
    })
})