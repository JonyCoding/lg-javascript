// 箭头函数与 this
// 箭头函数不会改变 this 指向

const person = {
  name: 'tom',
  // sayHi: function () {
  //   console.log(`hi, my name is ${this.name}`)
  // }
  // 箭头函数没有this指向，不会改变this的指向
  // 箭头函数外面是什么，里面就是什么
  sayHi: () => {
    console.log(`hi, my name is ${this.name}`)
  },
  // sayHiAsync: function () {
  //   // const _this = this
  //   // setTimeout(function () {
  //   //   console.log(_this.name)
  //   // }, 1000)

  //   console.log(this)
  //   setTimeout(() => {
  //     // console.log(this.name)
  //     console.log(this)
  //   }, 1000)
  // }
}
person.sayHi()
// person.sayHiAsync()
