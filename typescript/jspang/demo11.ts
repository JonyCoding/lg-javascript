/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-08 17:12:04
# LastEdit: enter your name
# LastEditTime: 2020-10-08 17:13:04
# Description: 类的访问方法,类的内部和类的外部
#
============================================================================= */
// 内部和外部
class Person {
    // 共有的，可以在类的外部和内部访问
    public name: string;
    // 私有的，只能在类的内部访问
    private age: number;
    // 也可以看作一种私有的方法，但是有一种特殊情况就是
    protected height: number;
    public sayHello() {
        console.log(this.name + ',Hello!');
    }
}

class teacher extends Person {
    public sayBye() {
        this.height = 100
        console.log(++this.height);
    }
}


const person = new Person()
const lilei = new teacher()
person.name = 'Jony'
// person.age = 18
// person.height = 33
person.sayHello()//Jony,Hello!
lilei.sayBye();//101
console.log(person.name);//Jony