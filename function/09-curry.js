/*
 * @Author: xie yanpeng
 * @Date: 2020-10-28 14:50:39
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 15:14:13
 * @Description: 
 */
// function checkAge(){
//     let min = 18;
//     return age >= min
// }

// 普通纯函数
// function checkAge(min,age){
//     return age >= min
// }

// console.log(checkAge(18,20));
// console.log(checkAge(20,24));
// console.log(checkAge(22,24));

// 柯里化
// 当一个函数有多个参数的时候，只传递部分参数(永远不变的参数 )，让函数返回一个新的函数，让新的函数接收剩余的函数 
// function checkAge(min){
//     return function(age){
//         return age >= min 
//     }
// }

// es6柯里化
let checkAge = (min)=>(age => age >= min)

checkAge18 = checkAge(18)
checkAge20 = checkAge(20)
checkAge22 = checkAge(22)

console.log(checkAge18(20));
console.log(checkAge20(18));
console.log(checkAge22(24));