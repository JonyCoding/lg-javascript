/*
 * @Author: Jony
 * 
 * @Date: 2020-10-09 20:31:53
 * @LastEditTime: 2020-10-09 22:07:28
 * @# Description: 范型
 * @FilePath: /lg-javascript/Typescript/jspang/demoConfig/src/demo3.ts
 */

// 类型注释是在代码定义的时候确定类型，而范型就是在代码调用的时候确定类型

function join<jony>(first:jony,second:jony){
    return `${first}${second}`
}
join<string>('Jony',"123")
//范性中数组的使用

// function myFun<ANY>(params:ANY[]){
function myFun<ANY>(params:Array<ANY>){
    return params
}

myFun<string>(["123"])