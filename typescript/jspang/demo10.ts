/* ============================================================================= 
#
# Author: xie yanpeng
# Date: 2020-10-08 17:02:38
# LastEdit: enter your name
# LastEditTime: 2020-10-08 17:03:24
# Description: 
#
============================================================================= */
export {}
class Lady{
    content = 'hi,帅哥'
    sayHello(){
        return this.content
    }
}

class xiaojiejie extends Lady{
    // 类的方法的重写
    sayHello(){
        return 'hi,honey'
    }// 输出hi,honey
    
    // 如果注释掉，输出 hi,帅哥
    
    sayHello2(){
        return super.sayHello()+'. 你好！'
    }

    sayLove(){
        return 'I love you'
    }
}

const lili = new xiaojiejie()
console.log("lili.sayHello()",lili.sayHello());
console.log("lili.sayHello2()",lili.sayHello2());
console.log("lili.sayLove()",lili.sayLove());