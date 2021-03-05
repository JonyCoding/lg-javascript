// 迭代器（Iterator）

// const set = new Set(['foo', 'bar', 'baz'])

// const iterator = set[Symbol.iterator]()

// // console.log(iterator.next())
// // console.log(iterator.next())
// // console.log(iterator.next())
// // console.log(iterator.next())
// // console.log(iterator.next())

// while (true) {
//   const current = iterator.next()
//   if (current.done) {
//     break // 迭代已经结束了，没必要继续了
//   }
//   console.log(current.value)
// }


const obj = {
  [Symbol.iterator]: function () {
    let index = 0
    const self = this
    return {
      next: function () {
        const result = {
          value: self.store[index],
          done: index >= self.store.length
        }
        index++
        return result
      }
    }
  },
  name: 'arr',
  age: 20,
  height: 180
}

for (const item of obj) {
  console.log(item);
}
// const iterator = obj[Symbol.iterator]()
// while(true){
//   const nextIterator = iterator.next()
//   if(nextIterator.done){
//     break;
//   }
//   console.log(nextIterator.value);
// }