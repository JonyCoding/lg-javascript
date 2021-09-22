// alloc:创建制定字节大小的buffer
const b1 = Buffer.alloc(10)
// allocUnsafe:创建制定大小的buffer（不安全）
const b2 = Buffer.allocUnsafe(10)
// console.log(b1);
// console.log(b2);

// from：接受数据，创建buffer
// const b3 = Buffer.from('中')
// console.log(b3);
// 第一个参数是吧什么参数放到buffer中，

// const b4 = Buffer.from([1,5,'对',4])
// console.log(b4);  // <Buffer 01 05 00 04>

// 传入数组的时候，要先转换成16进制的数字，再存入才会显示
// const b5 = Buffer.from('中')
// const b6 = Buffer.from([0xe4, 0xb8, 0xad])
// console.log(b5);
// console.log(b5.toString());
// console.log(b6);
// console.log(b6.toString());

// 可以以一个buffer为数据源创建一个新的buffer（重新创建了一个新的空间）
const b8 = Buffer.from(b1)
// console.log(b8);

b1[0] = 2
// console.log(b8);


// buffer 实例方法
let buf = Buffer.alloc(6)
// fill:使用数据填充buffer
// buf.fill('123',1,3) 
// 1、如果给定的数据不足以填满数据，那么会反复的用当前数据填充buffer
// 2、第二个参数是代表从第几位开始存入
// 3、第三个位置是结束位置 


// write:向buffer中提取数据
// buf.write('123',1,2)
// 1、不会重复写入，有多少个就存入多少
// 2、第二个参数是代表从第几位开始存入
// 3、第三个参数是length

// toString:从buffer中提取数据
buf = Buffer.from('Jony')
// 1、从buffer开始到buffer结束存入数据
// 1、数据编码类型  
// 2、从buffer哪一个下标开始截取
// 3、结束位置

// slice截取buffer
// 1、截取的开始位置
// 2、结束位置
// 如果传入负数的话是从后往前


// indexOf:在buffer中查找数据
// copy：拷贝buffer中的数据

console.log("buffer->",buf);
console.log("buffer->",buf.toString());


// 静态方法
// concat : 将多个buffer拼接成一个新的buffer
// Buffer.concat([b1,b2])
// 1、第一个参数为需要合并的buffer的数组
// 2、指定长度的数据

// isBuffer ： 判断当前数据是否为一个buffer
