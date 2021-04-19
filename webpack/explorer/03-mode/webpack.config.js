const path = require('path')
module.exports = {
    // 打包入口文件
    entry : './src/main.js',
    output:{
        // 输出文件路径
        filename:'bundle.js',
        // 制定输出文件制定的目录
        path:path.join(__dirname,'output')
    }
}