/*
 * @Author: Jony
 * 
 * @Date: 2020-11-02 22:15:31
 * @LastEditTime: 2020-11-02 22:19:49
 * @# Description: 
 * @FilePath: /lg-javascript/function/13-compose.js
 */
// 函数的组合
function compose(f,g){
    return function(value){
        return f(g(value))
    }
}

// 反转数组
function reverse(array){
    return array.reverse()
}

// 获取数组中第一个元素
function first(array){
    return array[0]
}

const last = compose(first,reverse)

console.log(last([1,2,3,4,5]))