/*
 * @Author: Jony
 * 
 * @Date: 2020-10-09 21:49:18
 * @LastEditTime: 2020-10-09 22:45:22
 * @# Description: 在类中使用范型
 * @FilePath: /lg-javascript/Typescript/jspang/demoConfig/src/demo4.ts
 */

interface Girl{
    name:string
}
//  普通写法
class SelectGirl{
    constructor(private girl:string[]|number[]){}
    getGirl(index:number):string|number{
        return this.girl[index]
    }
}
// 范型写法
class SelectGirl2<T>{
    constructor(private girl:T){}
    getGirl(index:number):T{
        return this.girl[index]
    }
}
const selectGirl = new SelectGirl2<string[]>(['大脚','刘莹','莉莉'])
console.log(selectGirl.getGirl(2)); 
