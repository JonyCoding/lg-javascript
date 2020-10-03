/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-03 21:53:44
# LastEdit: enter your name
# LastEditTime: 2020-10-03 21:53:51
# Description: 1、类型注解    2、类型推断
#
============================================================================= */
export {}

// 类型注解
let count:number;
count = 123;

// 类型推断
let countInference = 123;

// 潜规则
// 如果能够分析就是用类型推断
// 如果不能推断就需要使用类型注解


// 以下就不需要使用类型注解
let one = 1;
let two = 2; 
const three = one + two;

// 以下 getTotal 需要使用类型注解
function getTotal1(one,two){
    return one + two
}
const total1 = getTotal1(1,2)  //此时显示any
// 作为对比
// 以下 getTotal2 使用了类型注解对比一下
function getTotal2(one:number,two:number){
    return one + two
}
const total2 = getTotal2(1,2)  //此时显示number

// 以下直接推断出了
const Xiaojiejie = {
    name:'刘英',
    age:18
}