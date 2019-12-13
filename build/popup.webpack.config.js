const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        zooPopup: path.resolve(process.cwd(), './src/popup/index.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), './dist/js'),
        library: 'zooPopup',
        libraryTarget: 'umd'
    },
    //开发服务
    devServer: {
        contentBase: path.resolve(process.cwd(), './dist'),
    },
    plugins: [
        
    ],
    module: {
        //加载css
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // 将 JS 字符串生成为 style 节点
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
        //加载sass

    }
};