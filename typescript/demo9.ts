/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-06 21:59:55
# LastEdit: enter your name
# LastEditTime: 2020-10-06 22:00:02
# Description: 
#
============================================================================= */
export {}
// 接口
interface Girl {
    name: string;
    age: number;
    bust: number;
    waistline?: number;//可选择的值
    [propname:string]:any //属性名称是字符串类型，值可以是任何类型
    say():string  //接口中必须有一个say方法，返回值必须是string类型
}
// 类型别名
// type Girl1 = {
//     name: string;
//     age: number;
//     bust: number;
//     waistline?: number;
// }
// 他们两很相像，但是类型别名可以
// type Girl1 = string 这种形式存在

const girl = {
    name: '大脚',
    age: 19,
    bust: 97,
    waistline:44,
    sex:'女',
    say(){
        return '欢迎光临，红浪漫洗浴'
    }
}



// 接口不仅能限制对象，还能限制类
class xiaojiejie implements Girl{
    name: '大脚';
    age: 19;
    bust: 97;
    waistline:44;
    sex:'女';
    say(){
        return '欢迎光临，红浪漫洗浴'
    }
}

/// 接口的继承
interface teacher extends Girl {
    teachr():string
}


const screenResume = (girl: Girl) => {
    girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
    girl.age >= 24 || girl.bust < 90 && console.log(girl.name + '你被淘汰');
}

const getResume = (girl: Girl) => {
    console.log(girl.name + "年龄是" + girl.age);
    console.log(girl.name + "胸围是" + girl.bust);
    girl.waistline?console.log(girl.name + "腰围是" + girl.waistline):""
}
screenResume(girl)
getResume(girl)