/*
 * @Author: Jony
 * 
 * @Date: 2020-11-04 22:11:50
 * @LastEditTime: 2020-11-05 22:10:28
 * @# Description: 
 * @FilePath: /lg-javascript/function/20-pointfree.js
 */
// point free
// Hello World => hello world

const fp = require('lodash/fp')

const f = fp.flowRight(fp.replace(/\s+/g, "_"),fp.toLower)

console.log(f('Hello     World'));

