/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-06 18:23:57
# LastEdit: enter your name
# LastEditTime: 2020-10-06 18:26:11
# Description: 
#
============================================================================= */
// 接口
interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;
}
// 类型别名
// type Girl1 = {
//     name: string;
//     age: number;
//     bust: number;
//     waistline?: number;
// }
// 他们两很相像，但是类型别名可以
// type Girl1 = string 这种形式存在

const girl = {
    name: '大脚',
    age: 19,
    bust: 97,
    waistline:44
}
const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
    girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const getResume = (girl: Girl) => {
    console.log(girl.name + "年龄是" + girl.age);
    console.log(girl.name + "胸围是" + girl.bust);
    girl.waistline?console.log(girl.name + "腰围是" + girl.waistline):""
}
screenResume(girl)
getResume(girl)