/*
 * @Author: Jony
 * @Date: 2020-10-18 22:31:50
 * @LastEditTime: 2020-10-18 22:54:21
 * @# Description: 
 * 
 * @FilePath: /lg-javascript/function/02-highter-order-function.js
 */
// 函数作为返回值

// const {
//     once
// } = require("lodash");

function makeFn() {
    let msg = 'hello function'
    return function () {
        console.log(msg);
    }
}

const fn = makeFn()
fn()

// once
function once(fn) {
    let done = false;
    return function () {
        if (!done) {
            done = true;
            fn.apply(this, arguments)
        }
    }
}
let pay = once(function(money){
    console.log('支付了'+money);
})
pay(2)
pay(2)
pay(2)
pay(2)
pay(2)