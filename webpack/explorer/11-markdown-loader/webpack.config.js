const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
        // publicPath: 'output/'
    },
    module: {
        rules: [{
            test: /.md$/,
            use: [
                'html-loader',
                './markdown-loader.js'
            ]
        }, ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "webpack plugin sample",
            meta: {
                viewport: "width=device-width"
            },
            template: './src/index.html'
        }),
        // 还可以创建多个
        new HtmlWebpackPlugin({
            filename: 'about.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                'public'
            ],
        })
    ]
}