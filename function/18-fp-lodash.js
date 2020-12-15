/*
 * @Author: xie yanpeng
 * @Date: 2020-11-04 17:09:31
 * @LastEdit: enter your name
 * @LastEditTime: 2020-11-04 17:17:42
 * @Description: 
 */
const fp = require('lodash/fp')

const f = fp.flowRight(fp.join('-'),fp.map(fp.toLower), fp.split(' '))

console.log(f('NAVER SAY DIE'));