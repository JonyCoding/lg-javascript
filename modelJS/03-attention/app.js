// 并不是复制了一份   而是修改了内存的指向，是真实的指向了导出的成员位置
import {
    age,
    name,
    default as obj
} from "./module.js"
// 这是一种错误的方法，因为倒入的成员是常量不能在外部修改
// name = 'tom'

console.log(name);
console.log(age);
console.log('对象', obj);
setTimeout(() => {
    console.log(name);
    console.log(age);
    console.log('对象', obj);
}, 1500);