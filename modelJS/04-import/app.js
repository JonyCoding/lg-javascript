// 不能省略js的扩展名
// 
// import {name} from "./module"

// --------------
// import {
//     name
// } from "./module.js"
// console.log(name);
//  ------------

//  ------------
// 同样需要输入完整的路径
// import {lowercase} from './utils'
// import {lowercase} from './utils/index.js'
// console.log(lowercase('HHH'));
//  ------------


//  ------------
// 相对路径必须要以 . 开头 和comment.js是相同的
// import {name} from 'module.js'
// import {
//     name
// } from './module.js';

// 绝对路径就从网页根目录开始就可以
// import {
//     name
// } from '/04-import/module.js';

// 引入cdn上面的模块
// import {
//     name
// } from 'http://localhost:3000/04-import/module.js';
// console.log(name);
//  ------------


// 如果只是想加载或者运行而不提取   可以写一个空的花括号
// import {} from './module.js'
// 或者
// import './module.js'


//  ------------
// 如果导出成员特别多的话,可以用  *  来代替
// import * as mod from './module.js'
// console.log(mod);
//  ------------


// 如果一开始并不知道路径  是不可以用变量的方式储存（错误写法）
// var modulesPath = './module.js'
// import {name} from modulesPath
// if(true){
//  import {name} from './module.js'
// }
// 在这里就需要用动态的方式加载模块
// import('./module.js').then(module=>{
//     console.log(module);
// })
// console.log(name);

// -------------
// 默认方式
// import {name,age,default as title} from './module.js'
// 简写
import title,{name,age,} from './module.js'

console.log(name,age,title);