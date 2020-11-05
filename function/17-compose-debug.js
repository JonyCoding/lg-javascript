/*
 * @Author: Jony
 * 
 * @Date: 2020-11-02 22:41:04
 * @LastEditTime: 2020-11-04 23:25:11
 * @# Description: 
 * @FilePath: /lg-javascript/function/17-compose-debug.js
 */
// 函数组合  调试

const _=require('lodash')

// _.split()

const splic = _.curry((sep,str)=>_.split(str,sep))