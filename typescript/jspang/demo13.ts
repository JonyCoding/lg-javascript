
/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-08 17:52:02
# LastEdit: enter your name
# LastEditTime: 2020-10-08 17:53:17
# Description: 
#
============================================================================= */
export {}
class xiaojiejie{
    // 只能在内部访问的类命名从下划线开始
    constructor(private _age:number){}
    // get进行了封装,将真实的数据保护起来
    get age(){
        return this._age
    }
    // set也是封装，
    set age(age:number){
     this._age = age
    }
    
}
class Girl{
    static sayLove(){
        return 'I love you'
    }
}
// 当属性为静态属性的时候，直接调用类下面的方法就可以
console.log(Girl.sayLove());




const dajiao = new xiaojiejie(28)
dajiao.age = 25

console.log(dajiao.age);