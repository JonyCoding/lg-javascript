const path = require('path')
const webpack = require('webpack')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = (env,args) => {
    const config = {
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
        devServer :{
            hot:true
        },
        module: {
            rules: [
                {
                    test:/.md$/,
                    use:[
                        'html-loader',
                        './markdown-loader.js'
                    ]
                },
                {
                    test:/.css$/,
                    use:[
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        },
        plugins:[
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title:"webpack plugin sample",
                meta:{
                    viewport:"width=device-width"
                },
                template:'./src/index.html'
            }),
            new webpack.HotModuleReplacementPlugin()
        ]
    }
    if(env === 'production'){
        config.mode = 'production'
        config.devtool = false
        config.plugins = [
            ...config.plugins,
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                    patterns: [
                        'public'
                    ],
                })
        ]
    }
    return config
}