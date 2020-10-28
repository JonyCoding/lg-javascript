/*
 * @Author: xie yanpeng
 * @Date: 2020-10-14 08:55:58
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 14:08:01
 * @Description: 
 */
const _ = require('lodash');

const arr = ['jack','tom','luck','kate']

// console.log(_.first(arr));
// console.log(_.last(arr));

// console.log(_.toUpper(_.first(arr)))

console.log(_.reverse(arr));

console.log(_.each(arr,(item,index)=>{
    console.log(item,index);
}))

_.includes