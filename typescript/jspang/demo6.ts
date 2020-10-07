/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-03 22:33:26
# LastEdit: enter your name
# LastEditTime: 2020-10-03 22:34:15
# Description: 
#
============================================================================= */
const numberArr: number[] = [1, 2, 3]

const StringArr: string[] = ['a', 'b', 'c']

const undefinedArr: undefined[] = [undefined]

// 既包含数字又包含字符串
const arr: (number | string)[] = [1, 'string', 2]

// 对象数组类型（具体定义了对象内部的类型）
const xiaojiejies1 :{name:string,age:number}[]= [{
    name: '刘英',
    age: 19
}, {
    name: '谢大脚',
    age: 18
}]

// 上面的定义对象数组的方法有点啰嗦，下面有简单实现的方法

type Lady = {name:string,age:number}
const xiaojiejies2 : Lady[] = [{
    name: '刘英',
    age: 19
}, {
    name: '谢大脚',
    age: 18
}]

class Madom {
    name:string;
    age:number;
}
const xiaojiejies:Madom[] = [{
    name: '刘英',
    age: 19
}, {
    name: '谢大脚',
    age: 18
}]