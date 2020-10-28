/*
 * @Author: xie yanpeng
 * @Date: 2020-10-28 13:56:21
 * @LastEdit: enter your name
 * @LastEditTime: 2020-10-28 14:01:02
 * @Description: 
 */
// 纯函数和不纯函数

let arr = [1, 2, 3, 4, 5, 6]
// 纯函数
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));
console.log(arr.slice(0, 3));
//不纯函数 会改变元数据
console.log(arr.splice(0, 3));
console.log(arr.splice(0, 3));
console.log(arr.splice(0, 3));

// 纯函数
// 函数式编程不会保留计算的结果，所以变量是不可变的
function getSum(n1, n2) {
    return n1 + n2
}
// 可以把执行结果交给另一个函数去处理
console.log(getSum(1, 2));
console.log(getSum(1, 2));
console.log(getSum(1, 2));