> 开发说明

## 开发技术
- js插件使用webpack + es6
- css样式库 基于sass


## 安装
```
npm install
```

## 文档开发
- 文档使用 `markdown`编写 , 文件位于 /docs
- 文档依赖 [docsify](https://docsify.js.org/#/zh-cn/quickstart) 
- 运行文档

```
docsify serve docs
```

## css样式库打包
npm run build:css

## js插件打包
- 插件需要进行单独配置
- 例: Validate
  
```
//创建命令打包规则文件
build/validatejs.webpack.config.js
//创建命令
"build:validatejs": "webpack --config build/validatejs.webpack.config.js",  
//运行
npm run build:validatejs
```


