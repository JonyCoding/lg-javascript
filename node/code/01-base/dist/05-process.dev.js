"use strict";

// 1 资源： cpu 内存
// console.log(process.memoryUsage())
// console.log(process.cpuUsage())
// 2 运行环境：运行目录、node环境、cpu架构、用户环境、系统平台
//  console.log(process.cwd())
// console.log(process.version)
// console.log(process.versions)
// console.log(process.arch)
// console.log(process.env.NODE_ENV)
// console.log(process.env.PATH)
// console.log(process.env.USERPROFILE)  // HOME
// console.log(process.platform)
// 3 运行状态： 启动参数、PID、运行时间
// console.log(process.argv)
// console.log(process.argv0)  // execArgv
// console.log(process.pid) // ppid
// setTimeout(() => {
//   console.log(process.uptime())
// }, 3000)
// 4 事件
// 只支持同步代码
// process.on("exit", (code) => {
// 	console.log("exit " + code);
// });
// process.on("beforeExit", (code) => {
// 	console.log("before exit " + code);
// });
// console.log("code run end");
// 5 标准输入输出
// console.log = function (data) {
// 	process.stdout.write("--- " + data + "\n");
// };
// console.log(222);
// const fs = require('fs')
// fs.createReadStream('test.txt').pipe(process.stdout)
// 接收输入，直接打印在控制台
// process.stdin.pipe(process.stdout)
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
  var chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write('data ' + chunk);
  }
});