const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge.merge(common,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                'public'
            ],
        }),
    ]
})