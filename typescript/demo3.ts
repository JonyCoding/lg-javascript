
/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-03 21:38:29
# LastEdit: enter your name
# LastEditTime: 2020-10-03 21:43:04
# Description: 对象类型
#
============================================================================= */
const count:number = 918;
const muName :string = 'jspang';

const xiaoJieJie:{
    name:String,
    age:number
} = {
    name:'大脚',
    age:18
}

const xiaojiejie:string [] = ['谢大脚','刘英','123']


// 对象
class Person{
    name:string=''
    age:number=23
}
const dajiao:Person = new Person()

console.log(dajiao.age);

// 函数对象
const jianXiaojiejie : ()=>String = ()=>{
    // return 2  //不能将类型“() => number”分配给类型“() => String”。不能将类型“number”分配给类型“String”。
    return '大脚'
}


// 对象类型包括
// 1、普通对象类型
// 2、数组对象类型
// 3、类数据类型
// 4、函数数据类型

const arr1 : ()=>string = ()=>{
    return ''
}