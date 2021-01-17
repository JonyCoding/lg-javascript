// grunt 入口文件
// 用于定义需要grunt自动执行的任务
// 需要导出一个函数
// 此函数接受grunt的形参，内部提供一下创建任务的API

module.exports = grunt =>{
    grunt.registerTask('foo',()=>{
        console.log("hello grunt~");
    })
    grunt.registerTask('bar','任务描述',()=>{
        console.log("bar grunt~");
    })
    // 默认任务
    // grunt.registerTask('default',()=>{
    //     console.log("default grunt~");
    // })

    grunt.registerTask('default',['foo','bar'])

    // 异步不起作用
    // grunt.registerTask('async-task',()=>{
    //     setTimeout(()=>{
    //         console.log("async task working……");
    //     },1000)
    // })

    grunt.registerTask('async-task',function (){
        const done = this.async()
        setTimeout(()=>{
            // 此时会等待done的执行，执行完毕才会执行
            console.log('async task working～');
            done()
        },1000)
    })
}