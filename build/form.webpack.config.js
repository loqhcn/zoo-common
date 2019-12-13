const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        form: path.resolve(process.cwd(), './src/validate/form.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), './dist/js'),
        library: '',
        libraryTarget: 'umd'
    },
    //开发服务
    devServer: {
        contentBase: path.resolve(process.cwd(), './dist'),
    },
    externals: {
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        }
    },
    plugins: [
        // //清理dist
        // new CleanWebpackPlugin(),

        //打包form
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), './public/index.html'),
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