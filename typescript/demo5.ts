/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-03 22:10:10
# LastEdit: enter your name
# LastEditTime: 2020-10-03 22:11:04
# Description: 
#
============================================================================= */
function getTotal1(one: number, two: number) {
    return one + two + ''
}
const total1 = getTotal1(1, 2)
// total是一个字符串，但是预期想要的是一个number


function getTotal2(one: number, two: number):number {
    return one + two 
}
const total2 = getTotal2(1, 2)
// total是一个字符串，但是预期想要的是一个number

function sayHello():void{
    console.log('object');
    // return ''  会报错，因为现在固定了返回值为空
}


function errorFunction():never{
    throw new Error()
    console.log('hello world');
}  // 返回值是never，表示程序永远执行不完

function forNever():never{
    while(true){}
    console.log("object");
}   // 死循环


function add({one,two} :{one:number,two:number}){
    return one + two
}

const total = add({one:1,two:2})
console.log("object",total);

function getNumber({one}:{one:number}) {
    return one
}
const one = getNumber({one :1})