/*
 * @Author: xie yanpeng
 * @Date: 2020-12-15 09:12:34
 * @LastEdit: enter your name
 * @LastEditTime: 2020-12-16 09:01:42
 * @Description: 
 */
// 此文件为Generator 的核心入口
//需要导出一个继承自yeoman generator的类型
//Yeoman Generator 工作时会自动导出我们在此类型中定义的周期方法
//我们在此文件中可以调用父类提供的一些方法实现一些功能，例如文件写入
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting(){
        // 询问用户环节会调用此方法
        // 此方法中发出对用户的命令行询问

        return this.prompt([
            {
                type:"input",//此项为用户输入
                name:"name",//键
                message:"your project name",//命令行询问
                default:this.appname //当前目录名
            }
        ])
    }
    writing(){
        // Yeoman 自动在生成文件阶段调用此方法
        // 我们可以尝试在这里向目录中写入文件
        this.fs.write(
            this.destinationPath('temp.txt'),
            Math.random().toString
        )
    }
}