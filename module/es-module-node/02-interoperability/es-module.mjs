// // ES module 可以导入 CommonJS的模块
// import mod from './commonjs.js'
// console.log(mod);

// // 不能直接提取成员，因为 import 不是解构导出对象
// import {foo} from './commonjs.js'
// console.log(foo);

// export const foo = 'This is foo'

module.exports = {
    foo: 'commonJs export value'
}
// 总结：
// ES module中可以载入commonJS的模块
// commonJS中不能导入ESModules模块
// commonJS始终只会导出一个默认成员
// 注意import不是解构导出对象