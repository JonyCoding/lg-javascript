/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-08 18:31:49
# LastEdit: enter your name
# LastEditTime: 2020-10-09 17:51:43
# Description: 类型保护
#
============================================================================= */
interface Waiter {
    anjiao: boolean;
    say: () => {

    }
}
interface Teacher {
    anjiao: boolean;
    skill: () => {

    }
}
// 类型断言
function judgeWho(animal: Waiter | Teacher) {
    if (animal.anjiao) {
        (animal as Teacher).skill()
    } else {
        (animal as Waiter).say()
    }
}
function judgeWhoTwo(animal:Waiter|Teacher){
    if('skill' in animal){
        animal.skill()
    }else{
        animal.say()
    }
}