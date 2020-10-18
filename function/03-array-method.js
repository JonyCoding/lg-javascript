/*
 * @Author: Jony
 * 
 * @Date: 2020-10-18 23:04:20
 * @LastEditTime: 2020-10-18 23:30:24
 * @# Description: 
 * @FilePath: /lg-javascript/function/03-array-method.js
 */
// 模拟常用的高阶函数


// map  遍历每一个元素并坐相应的处理
const map = (array,fn)=>{
    let results = []
    for(let value of array){
        results.push(fn(value))
    }
    return results
}
let arr = [1,2,3,4,7,8,11,15]

arr = map(arr,v=>v*v)
console.log(arr);

// every  是否每一个都满足条件
const every = (array,fn)=>{
    let results = true;
    for(let value of array){
        results = fn(value)
        if(!results){
            break
        }
    }
    return results
}

let r = every(arr,v=>v>10)
console.log(r);

// some 是够有元素一个元素是满足的
const some = (array,fn)=>{
    let results = false
    for(let value of array){
        results = fn(value)
        if(results){
            break
        }
    }
    return results
}

let a = some(arr,v=>v%2==0)
console.log(a);
