const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js",
        form: "./src/form.js",
        Validate: "./src/Validate.js",
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/test'),
        //配置部署目录
        // publicPath: '/',
        library: 'Validate',
        libraryTarget: 'umd'
    },
    //开发服务
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        //清理dist
        new CleanWebpackPlugin(),

        //打包form
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Zoo Coffee common',
            chunks: [
                'index'
            ],
        }),

        //注册jquery
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            jquery: 'jquery',
        })

    ],
    module: {
        //加载css
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader', exclude: /node_modules/
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