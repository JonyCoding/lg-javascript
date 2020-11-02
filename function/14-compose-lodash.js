/*
 * @Author: Jony
 * 
 * @Date: 2020-11-02 22:22:01
 * @LastEditTime: 2020-11-02 22:24:59
 * @# Description: 
 * @FilePath: /lg-javascript/function/14-compose-lodash.js
 */
// lodash中函数组合的方法

const _=require('lodash')

const reverse = arr => arr.reverse()
const first = arr=>arr[0]
const toUpper = s=> s.toUpperCase()

const f = _.flowRight(toUpper,first,reverse)

console.log(f(['one','two','three']));