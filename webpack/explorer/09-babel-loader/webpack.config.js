const path = require('path')
module.exports = {
    // 打包入口文件
    entry: './src/main.js',
    output: {
        // 指定mode打包工作模式
        // mode:'none',
        // 输出文件路径
        filename: 'bundle.js',
        // 制定输出文件制定的目录
        path: path.join(__dirname, 'output'),
        publicPath: 'output/'
    },
    module: {
        rules: [
            {
                test:/.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 图片处理loader
            // {
            //     test:/.jpg$/,
            //     use:[
            //         'file-loader',
            //     ]
            // }
            {
                test: /.jpg$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1224 // 10kb
                    }
                }
            }
        ]
    }
}