const path = require('path')
module.exports = {
    // 打包入口文件
    entry : './src/main.js',
    output:{
        // 指定mode打包工作模式
        // mode:'none',
        // 输出文件路径
        filename:'bundle.js',
        // 制定输出文件制定的目录
        path:path.join(__dirname,'output')
    }
}