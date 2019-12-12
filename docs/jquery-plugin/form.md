## 使用演示



```html

<form action="" id="from1">

  <table>
    <tr>
      <td width="74" height="72" class="moviezbt">姓名</td>
      <td class="validate-field" validate-field='#textfield2' required maxlength="4" minlength="2" width="477"><label
          for="textfield2"></label>
        <input type="text" name="textfield" id="textfield2" /></td>
    </tr>
  </table>

  <div>
    年龄<input type="text" name="age" name-show="年龄" required maxlength="10" minlength="2">
  </div>
  <div>
    身高<input type="text" name="shengao" name-show="身高" required number gt="100" lt="200">
  </div>
  <div>

    长度<input type="text" name="long" name-show="长度" required integer gt="15" lt="22">
  </div>
  <div>
    手机号<input type="text" name="mobile" name-show="手机号" required mobile>
  </div>
  <div>
    身份证<input type="text" name="idcard" name-show="身份证" required idcard>
  </div>
  <div>
    性别<input type="text" name="sex" name-show="性别" required in="男,女">
  </div>
  <!-- 把验证绑定在容器上,实现复杂的验证 -->
  <div class="validate-field" validate-field='[name="ele"]' name-show="饿了?" required errormsg="到底饿了没有?">
    饿了? <input type="radio" name="ele" value="1">饿了<input type="radio" name="ele" value="0">不饿
  </div>

  <div class="validate-field" validate-field='[name="ele2"]' name-show="饿了2?" required errormsg="到底饿了没有2?">
    饿了? <input type="radio" name="ele2" id="">饿了<input type="radio" name="ele2" id="">不饿
  </div>

  <div class="validate-field" validate-field='[name="check1"]' required errormsg="请阅读协议">
    <input type="checkbox" name="check1"> 同意协议
  </div>

  <div class="select">
    地方
    <select name="select" required id="" errormsg="请选择一个哦">
      <option value="">请选择</option>
      <option value="1">1啊</option>
      <option value="2">2啊</option>
      <option value="3">3啊</option>
      <option value="4">4啊</option>
    </select>

  </div>

  <button id="validate1-do">验证</button>
</form>

<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>
<script src="https://unpkg.com/zoo-common/dist/js/form.js"></script>
<script>
  $(function () {
    // window.parseRule = parseRule;
    window.$ = $;
    $('#validate1-do').click(function (e) {
      var res = $('#from1').validateForm({
        //选择某个class作为验证容器
        validateClass: 'validate-field',
        //验证错误的时候 为元素追加一个
        errorClass: 'validate-err',
      });
      if (!res) {
        e.preventDefault();
      }
      alert('成功');
    })

  })
</script>

```

<div class="form-demo">
  <form action="" id="from1">
    <table>
      <tr>
        <td width="74" height="72" class="moviezbt">姓名</td>
        <td class="validate-field" validate-field='#textfield2' required maxlength="4" minlength="2" width="477"><label
            for="textfield2"></label>
          <input type="text" name="textfield" id="textfield2" /></td>
      </tr>
    </table>
    <div>
      年龄<input type="text" name="age" name-show="年龄" required maxlength="10" minlength="2">
    </div>
    <div>
      身高<input type="text" name="shengao" name-show="身高" required number gt="100" lt="200">
    </div>
    <div>
      长度<input type="text" name="long" name-show="长度" required integer gt="15" lt="22">
    </div>
    <div>
      手机号<input type="text" name="mobile" name-show="手机号" required mobile>
    </div>
    <div>
      身份证<input type="text" name="idcard" name-show="身份证" required idcard>
    </div>
    <div>
      性别<input type="text" name="sex" name-show="性别" required in="男,女">
    </div>
    <!-- 把验证绑定在容器上,实现复杂的验证 -->
    <div class="validate-field" validate-field='[name="ele"]' name-show="饿了?" required errormsg="到底饿了没有?">
      饿了? <input type="radio" name="ele" value="1">饿了<input type="radio" name="ele" value="0">不饿
    </div>
    <div class="validate-field" validate-field='[name="ele2"]' name-show="饿了2?" required errormsg="到底饿了没有2?">
      饿了? <input type="radio" name="ele2" id="">饿了<input type="radio" name="ele2" id="">不饿
    </div>
    <div class="validate-field" validate-field='[name="check1"]' required errormsg="请阅读协议">
      <input type="checkbox" name="check1"> 同意协议
    </div>
    <div class="select">
      地方
      <select name="select" required id="" errormsg="请选择一个哦">
        <option value="">请选择</option>
        <option value="1">1啊</option>
        <option value="2">2啊</option>
        <option value="3">3啊</option>
        <option value="4">4啊</option>
      </select>
    </div>
    <button id="validate1-do">验证</button>
  </form>
</div>



<script>
  require(['//unpkg.com/zoo-common/dist/js/form.js'], function () {
    $(function () {
      // window.parseRule = parseRule;
      window.$ = $;
      $('#validate1-do').click(function (e) {
        var res = $('#from1').validateForm({
          //选择某个class作为验证容器
          validateClass: 'validate-field',
          //验证错误的时候 为元素追加一个
          errorClass: 'validate-err',
        });
        if (!res) {
          e.preventDefault();
          return;
        }
        alert('成功');
      })

    })
  });

</script>


## 配置



- `disableReValidate:Boolean` 禁用 验证错误后再更正 后的重新验证,
- `onlyOneError:Boolean` 只显示第一条错误
- `placeholderMsg:Boolean` 当required验证错误时, 尝试读取placeholder内容作为错误消息
- `validateClass:String` 默认validate-field  选择某个class作为验证容器, 验证规则写在容器上面, 值在value上

> 自定义错误实现

- `showError:function(错误消息,el,数据所在el,是否为重新验证:bool)` 自定义错误显示
- `removeError:function(el,数据所在el)` 自定义隐藏错误显示(重新验证后)
- `removeAllError:function()` 清除所有错误
- `errorMsg:Object` 自定义错误消息

> `字段名称.规则名` 规则名参考`已实现规则`

```javascript

 errorMsg:{
                "name.require":"名字必须填写哦",
                "name.max":"名字嘴唇昂",
            },
 
```

```

<div class="validate-field" validate-field='[name="check1"]' required errormsg="请阅读协议">
  <input type="checkbox" name="check1"> 同意协议
</div>
<script>
 var res = $('#from1').validateForm({
          //选择某个class作为验证容器
          validateClass: 'validate-field',

  });
</script>

```

- `errorClass:String` 默认 'validate-err', 验证错误的时候 为验证 元素(input) 或 容器 追加一个class

```
<script>
$('#from').validateForm({
  //选择某个class作为验证容器
  validateClass: 'validate-field',
  //验证错误的时候 为元素追加一个
  errorClass: 'validate-err',
});
</script>

```

## 已实现规则

- 验证依赖validate.js的规则

``` javascript

  {
            //必填
            required: { rule: 'require' },
            //长度
            maxlength: { rule: 'max' },
            minlength: { rule: 'min' },
            //大小范围
            lt: { rule: 'lt' },
            gt: { rule: 'gt' },
            //是否在范围
            notin: { rule: 'notIn' },
            in: { rule: 'in' },
            //数字类型
            integer: { rule: 'integer' },
            number: { rule: 'number' },
            //手机号 邮箱 身份证
            mobile: { rule: 'mobile' },
            email: { rule: 'email' },
            idcard: { rule: 'idcard' },
  }

```


## 使用说明
- 完全使用代码做验证

```javascript

```
- 基于容器做验证
- - 在容器上添加类名 `.validate-field` 表示 标记那是需要验证的

- 仅仅对input做验证