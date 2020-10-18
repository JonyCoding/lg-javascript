/*
 * @Author: Jony
 * 
 * @Date: 2020-10-18 22:16:57
 * @LastEditTime: 2020-10-18 22:30:31
 * @# Description: 
 * @FilePath: /lg-javascript/function/01-heighter-order-function.js
 */
// 函数作为参数
function forEach(array, fn) {
    for(let i = 0;i<array.length;i++){
        fn(array[i])
    }
}

// Test
let arr = [1,2,3,4,7,8]

// forEach(arr,function(item){
//     console.log(item);
// })

function filter(array, fn){
    let results = []
    for(let i = 0;i< array.length;i++){
        if(fn(array[i])){
            results.push(array[i])
        }
    }
    return results;
}

// test
let arr2 = filter(arr,function(item){
    return item%2 === 0;
})
console.log(arr2);