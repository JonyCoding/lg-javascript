// // commonJS只会导出一个默认成员
// module.exports = {
//     foo: 'commonJs export value'
// }


// 不允许commonjs模块中载入esmodule
const mod = module.require('./es-module.mjs')
console.log(foo);