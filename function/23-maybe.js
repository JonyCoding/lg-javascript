/*
 * @Author: Jony
 * 
 * @Date: 2020-11-05 23:03:36
 * @LastEditTime: 2020-11-05 23:20:35
 * @# Description: 
 * @FilePath: /lg-javascript/function/23-maybe.js
 */
class MayBe {
    static of(value){
        return new MayBe(value)
    }
    constructor(value) {
        this._value = value
        
    }
    map(fn){
        return this.isNothing()?MayBe.of(null) : MayBe.of(fn(this._value))
    }

    isNothing(){
        return this.value === null || this.value === undefined
    }
}
MayBe.a()