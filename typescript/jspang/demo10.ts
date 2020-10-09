export {}
class Lady{
    content = "hi,帅哥";
    sayHello(){
        return this.content
    }
}

// 继承了父类所有的方法
class xiaojiejie extends Lady{
    sayLove(){
        return "I love you"
    }
}


const goddess = new Lady()
const goddess2 = new xiaojiejie()
console.log(goddess2.sayHello());
console.log(goddess2.sayLove());