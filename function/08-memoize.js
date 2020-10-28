/*
 * @Author: xie yanpeng
 * @Date: 2020-10-28 14:09:44
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 14:33:32
 * @Description: 
 */
// 记忆函数

const { memoize } = require('lodash');
const _ = require('lodash')

function getArea(r) {
    console.log(r);
    return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// // 第一次执行，会完整调用
// console.log(getAreaWithMemory(4));
// // 之后的调用实际是调用的缓存
// console.log(getAreaWithMemory(4));
// console.log(getAreaWithMemory(4));

// 模拟memoize
memoize:(f)=>{
    let cache = {}
    return function(){
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f,arguments)
        return cache[key]
    }
}

let getAreaWithMemory = memoize(getArea)
// 第一次执行，会完整调用
console.log(getAreaWithMemory(4));
// 之后的调用实际是调用的缓存
console.log(getAreaWithMemory(4));
console.log(getAreaWithMemory(4));