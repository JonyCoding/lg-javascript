// 直接吧导入的成员作为导出成员导出，那么在当前作用于当中就不可以去使用当前的导入
// export {
//     age,
//     name
// } from "./module.js"
// 目的是可以吧散落的一些导出组织到一起导出

import {button,avatar} from './components/index.js' 
console.log(button);
console.log(avatar);