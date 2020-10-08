/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-08 17:32:19
# LastEdit: enter your name
# LastEditTime: 2020-10-08 17:37:29
# Description: 构造函数(类在实例化的时候自动执行的一个方法)
#
============================================================================= */
export {}
// class Person{
//     public name : string;
//     // 构造函数
//     constructor(name:string){
//         this.name = name
//     }
// }
// 以下代码等效于上面的代码
class Person{
    constructor(public name:string){}
}
class Teacher extends Person {
    // 继承类的构造函数必须包含 "super" 调用。
    constructor(public age:number){
        super('Jony')
    }
}


const person = new Person('Jony')
const teacher = new Teacher(18)
console.log(person.name);
console.log(teacher.age);