/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-03 21:30:03
# LastEdit: enter your name
# LastEditTime: 2020-10-03 21:30:24
# Description: 静态类型
#
============================================================================= */
// let count:number = 1;
//不仅不可以改变，还继承了number的所有的方法

interface Xiaojiejie{
    name:string,
    age:number
}
const xiaohong:Xiaojiejie = {
    name:'小红',
    age:8
}

console.log(xiaohong.name);



const str1:string = 'error';
console.log(str1.indexOf('error'));
