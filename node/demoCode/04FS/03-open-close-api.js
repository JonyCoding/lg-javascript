const fs = require('fs')
const path = require('path')

// open 可以实现边读边写，和read不一样的地方是不是全部读取
/* fs.open(path.resolve('data.txt'), 'r', (err, fd) => {
  console.log(fd)
}) */

// close
fs.open('data.txt', 'r', (err, fd) => {
  console.log(fd)
  fs.close(fd, err => {
    console.log('关闭成功')
  })
})