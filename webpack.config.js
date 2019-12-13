const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./src/index.js",
        form: "./src/form.js",
        validate: "./src/validate/dev.js",
        popup_dev: "./src/popup/dev.js",
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/test'),
        //配置部署目录
        // publicPath: '/',
        // library: 'Validate',
        // libraryTarget: 'umd'
    },
    resolve: {
        extensions: [ '.js', '.jsx']
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
        //validate页面
        new HtmlWebpackPlugin({
            template: 'public/validate.html',
            filename: 'validate.html',
            title: 'Zoo Coffee Validate',
            chunks: [
                'validate'
            ],
        }),

        //popup开发页面
        new HtmlWebpackPlugin({
            template: 'public/popup.html',
            filename: 'popup.html',
            title: 'popup开发页面',
            chunks: [
                'popup_dev'
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