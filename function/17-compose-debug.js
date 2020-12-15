/*
 * @Author: xie yanpeng
 * @Date: 2020-11-04 09:20:06
 * @LastEdit: enter your name
 * @LastEditTime: 2020-11-04 17:03:06
 * @Description: 
 */
// 函数组合-调试

// NAVER　SAY　DIE　--> never-say-die

const _ = require('lodash')

// _.split()
const split = _.curry((sep, str) => _.split(str, sep))

// const log = v=>{
//     console.log(v);
//     return v
// }

const trace = _.curry((tag,v)=>{
    console.log(tag,v);
    return v;
})
// _.toLower()

const join = _.curry((sep, array) => _.join(array, sep))


const map = _.curry((fn,array)=>_.map(array,fn))

const f = _.flowRight(join('-'),trace('map:'), map(_.toLower), trace('split:'),split(' '))




console.log(f('NAVER SAY DIE'));