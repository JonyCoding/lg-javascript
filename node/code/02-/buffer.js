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
console.log(b8);

b1[0] = 2
console.log(b8);


// buffer 实例方法
let buf = Buffer.alloc(6)
// fill:使用数据填充buffer
buf.fill('123')
// write:向buffer中提取数据
// toString:从buffer中提取数据
// slice截取buffer
// indexOf:在buffer中查找数据
// copy：拷贝buffer中的数据

