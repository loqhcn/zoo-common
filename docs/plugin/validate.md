## 基础使用
- 完全按照thinkphp-validate的使用方式开发,同时内置验证规则也将完全遵循
- 已实现的验证方式参照`内置规则`

```html
<form id="demo1" action="">
    用户名:<input type="text" name="username">
    年龄:<input type="text" name="age">
    密码:<input type="text" name="password">
    长度:<input type="text" name="lang">
    身高:<input type="text" name="shengao">
    <button type="button" class="btn" id="submit">提交</button>
</form>

<script src="//unpkg.com/zoo-common/dist/js/Validate.js"></script>
<script>
    $('#submit').click(function (e) {

        var data = {};
        $('#demo1').find('input').each(function (index, el) {
            data[$(el).attr('name')] = $(el).val();
        })
        var validate = new Validate({
            'lang|长度': 'in:13,14,15,16,17,18|require',
            'username|用户名': 'require|max:5',
            'age|年龄': 'require|integer',
            'password|密码': 'require|>:1',
            'shengao|身高': 'integer'
        }, {
            'username.require': '用户名不能为空',
            'age.require': '年龄必须填写',
            'password.>': '密码必须大于1'
        });

        if (!validate.check(data, true)) {
            alert(validate.getError());
            console.log(validate.getErrors());
        }
        e.preventDefault();
    });
</script>

```

<form id="demo1" action="">
    用户名:<input type="text" name="username">
    年龄:<input type="text" name="age">
    密码:<input type="text" name="password">
    长度:<input type="text" name="lang">
    身高:<input type="text" name="shengao">
    <button class="btn" id="submit">提交</button>
</form>

<script>
    require(['//unpkg.com/zoo-common/dist/js/Validate.js'], function (Validate) {
        $('#submit').click(function (e) {
            var data = {};
            $('#demo1').find('input').each(function (index, el) {
                data[$(el).attr('name')] = $(el).val();
            })
            var validate = new Validate({
                'username|用户名': 'require|max:6',
                'age|年龄': 'require|integer',
                'password|密码': 'require|>:1',
                'lang|长度': 'in:13,14,15,16,17,18|require',
                'shengao|身高': ''
            }, {
                'username.require': '用户名不能为空',
                'age.require': '年龄必须填写',
                'password.>': '密码必须大于1'
            });

            if (!validate.check(data, true)) {
                alert(validate.getError());
                console.log(validate.getErrors());
            }
            e.preventDefault();
        });
    })
</script>



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