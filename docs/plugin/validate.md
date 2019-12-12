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
<script src=""></script>
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script src="//unpkg.com/zoo-common/dist/js/Validate.js"></script>
<script>
    $('#submit').click(function (e) {
        //读取数据
        var data = {};
        $('#demo1').find('input').each(function (index, el) {
            data[$(el).attr('name')] = $(el).val();
        })
        //验证数据
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
        //验证消息  check(数据,bool:是否验证所有字段,bool:验证所有规则)
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

## npm使用

```
//安装
npm i zoo-common -S

//引入
var Validate = require('zoo-common/src/validate/Validate.js')
// or
import Validate from 'zoo-common/src/validate/Validate.js'

```

```javascript
var data = {name:'1',age:13}
var validate = new Validate({
    'name|名字': 'require|min:2|max:4',
    'age|年龄': 'require|>=:10|<=:100',
});
if (!validate.check(data, true)) {
    //一条错误消息
    var errorMsg =         alert(validate.getError());
    //所有错误
    var errors =     validate.getErrors();
    return;
}

```

## 内置规则

### 基础规则

> require 必填

如果验证规则没有添加require就表示没有值并且值为空则不进行其它验证

> number 验证某个字段的值是否为纯数字（采用正则验证，不包含负数和小数点），例如：

```
'num':'number'
```

> max,min 限制长度

> integer 整数

验证某个字段的值是否为整数（采用parseInt对比），例如：

```
'num':'integer'
```

> float
验证某个字段的值是否为浮点数字（采用正则验证），例如：

```
'num':'float'
```

> boolean 或者 bool
验证某个字段的值是否为布尔值（字符串或者bool的true或false），例如：

```
'num':'boolean'
```

> email
验证某个字段的值是否为email地址，例如：

```
'email':'email'
```

> array 验证某个字段的值是否为数组 例如：

```
'info':'array'
```

> accepted 

验证某个字段是否为为 yes, on, 或是 1。这在确认"服务条款"是否同意时很有用，例如
```
'accept':'accepted'
```

> length

验证某个字段的值的长度是否在某个范围，例如：
```
'name':'length:4,25'
```

或者指定长度
```
'name':'length:4'
```


## 函数说明

- 创建验证对象

```
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

```

- `check`(数据,bool:是否验证所有字段,bool:验证所有规则)

- `getError():String` 获得一条错误消息

- `getErrors():Array` 获得所有错误消息

```
  // 返回数据格式 
  [
    {
        
        field: '验证字段名',
        name: '字段显示名',
        rule: '验证规则',
        msg: '错误消息',
        args: '验证参数',
    }
    ...
  ]

```

## 自定义规则

* 如 用户名/邮箱/手机号

```

```


## 开发

```

//打包
npm run build:validatejs
```