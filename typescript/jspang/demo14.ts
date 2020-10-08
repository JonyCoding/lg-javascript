/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-08 18:06:40
# LastEdit: enter your name
# LastEditTime: 2020-10-08 18:07:22
# Description: 
#
============================================================================= */
export {}
class Person{
    public readonly _name:string
    constructor(public name:string){
        this._name = name
    }
}

const person = new Person('Jony')
person.name = 'jony2'
console.log(person._name);

// 抽象类的定义
abstract class Girl{
    // 抽象方法,所有继承于抽象类的子类都得实现这个方法，在抽象类中，此方法简单定义即可
    abstract skill()
}
class Waiter extends Girl{
    skill(){
        console.log('请喝水');
    }
}

class baseTeacher extends Girl{
    skill(){
        console.log('泰式按摩');
    }
}
class seniorTeacher extends Girl{
    skill(){
        console.log('全身SPA');
    }

}