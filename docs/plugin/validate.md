## 基础使用
- 验证方式借鉴thinkphp-validate的使用方式开发
```html
<button id="submit">测试</button>
<script src="//unpkg.com/zoo-common/dist/js/Validate.js"></script>
<script>
    $('#submit').click(function () {

        var validate = new Validate({
            'username|用户名': 'require|max:1 ',
            'age|年龄': 'require|integer',
            'password|密码': 'require|>:1',
            'lang|长度': 'in:13,14,15,16,17,18|require',
            'xiongwei|身高': ''
        }, {
            'username.require': '用户名不能为空',
            'age.require': '年龄必须填写',
            'password.>': '密码必须大于1'
        });

        if (!validate.check({
            username: 'as',
            age: 3.1415926,
            password: '0',
            lang: 1
        }, true)) {
            console.log(validate.getErrors());
        }

    });
</script>
```




## 内置规则

> require 必填

如果验证规则没有添加require就表示没有值并且值为空则不进行其它验证

> max,min 限制长度

> integer 整数



## 开发

```

//打包
npm run build:balidatejs
```