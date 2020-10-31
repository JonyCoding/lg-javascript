/*
 * @Author: xie yanpeng
 * @Date: 2020-10-28 15:19:48
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 20:48:10
 * @Description: 
 */
const _ = require('lodash')

function getSum (a,b,c){
    return a+b+c
}

// const curried = _.curry(getSum)

// console.log(curried(1,2,3));

// console.log(curried(1)(2,3));

// console.log(curried(1,2)(3));

function curry(func){
    return function curriedFn(...args){
        // 判断实惨和形参的个数
        if(args.length < func.length){
            return function(){
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }else{
           return func(...args)
        }
    }
}
const curried = curry(getSum)
console.log(curried(1,2)(3));