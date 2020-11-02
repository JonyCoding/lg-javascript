/*
 * @Author: Jony
 * 
 * @Date: 2020-11-02 22:25:54
 * @LastEditTime: 2020-11-02 22:34:57
 * @# Description: 
 * @FilePath: /lg-javascript/function/15-compose.js
 */

// const { reduce } = require('lodash')
// const _=require('lodash')

const reverse = arr => arr.reverse()
const first = arr=>arr[0]
const toUpper = s=> s.toUpperCase()

// const f = _.flowRight(toUpper,first,reverse)

// console.log(f(['one','two','three']));

// function compose(...args){
//     return function(value){
//         // reduce,对数组中每一个元素执行一个由我们提供的函数，并将其汇总成单个的结果
//         return args.reverse().reduce(function(acc,fn){
//             return fn(acc)
//         },value)
//     }
// }

const compose = (...args)=>value=> args.reverse().reduce((acc,fn)=>fn(acc),value)
        
    

const f = compose(toUpper,first,reverse)

console.log(f(['one','two','three']));