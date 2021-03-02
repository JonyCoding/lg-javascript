import {foo,bar} from './module.mjs'

console.log(foo);
console.log(bar);

import fs from 'fs'

fs.writeFileSync('./foo.txt','es module working')

// import _ from 'lodash'
// console.log(_.camelCase('ES module'));


// 不支持这种写法，因为并不是解构
// import {camelCase} from 'lodash'
// console.log(camelCase('ES module'));

// 内置模块官方做了兼容，会把所有的对象整体导出一次
import { writeFileSync } from 'fs'
writeFileSync('./bar.txt','This is bar TxT')

