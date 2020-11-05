/*
 * @Author: Jony
 * 
 * @Date: 2020-11-05 22:11:22
 * @LastEditTime: 2020-11-05 22:16:31
 * @# Description: 
 * @FilePath: /lg-javascript/function/21-pointfree.js
 */
// 把一个字符串中的首字母提取并转换成大些   并且使用.作为分隔符

const fp = require('lodash/fp')
// 做了两次遍历
// const firstLetterToUpper = fp.flowRight(fp.join('. '),fp.map(fp.first),fp.map(fp.toUpper),fp.split(' '))

const firstLetterToUpper = fp.flowRight(fp.join('. '),fp.map(fp.flowRight(fp.first,fp.toUpper)),fp.split(' '))

console.log(firstLetterToUpper('Hello World wen'));