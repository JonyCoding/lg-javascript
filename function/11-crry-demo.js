/*
 * @Author: xie yanpeng
 * @Date: 2020-10-28 16:09:45
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 16:39:30
 * @Description: 
 */
// 柯里化案例

// 提取字符
// ''.match(/\s+/g)
// // 提取数字
// ''.match(/\d+/g)
const _ = require('lodash');


const match = _.curry(function (reg, str) {
    return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)
// console.log(haveSpace('helloword'));
// console.log(haveNumber('a1s2d3'));

const filter = _.curry