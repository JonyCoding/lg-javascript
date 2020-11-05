/*
 * @Author: Jony
 * 
 * @Date: 2020-11-05 22:16:59
 * @LastEditTime: 2020-11-05 22:54:42
 * @# Description: 
 * @FilePath: /lg-javascript/function/22-functor.js
 */
// functor

// const {
//     map
// } = require("lodash")

// class Container {
//     constructor(value) {
//         this._value = value
//     }

//     map(fn) {
//         return new Container(fn(this._value))
//     }
// }


// let r = new Container(5)
//     .map(x => x + 1)
//     .map(x => x * x)

// console.log(r);


class Container {
    static of (value) {
        return new Container(value)
    }
    constructor(value) {
        this._value = value
    }

    map(fn) {
        return Container.of(fn(this._value))
    }
}

// let r = Container.of(5)
//     .map(x => x + 2)
//     .map(x => x * x)
//     .map(x=>{
//         console.log(x) 
//         return x})
// console.log(r);


// 演示传入null

Container.of(null)
    .map(x=>x.toUpperCase())

