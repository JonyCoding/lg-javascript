/*
 * @Author: xie yanpeng
 * @Date: 2020-10-28 15:19:48
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 15:37:15
 * @Description: 
 */
const _ = require('lodash')

function getSum (a,b,c){
    return a+b+c
}

const curried = _.curry(getSum)

// console.log(curried(1,2,3));

// console.log(curried(1)(2,3));

console.log(curried(1,2)(3));