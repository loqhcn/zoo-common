## 基础验证



```html
<form class="validate" action="">
  <label>名称</label>
  <input type="text" required autocomplete="off">
  <label>名称</label>
  <input type="text" required>
  <button type="button" id="submit-demo1">提交</button>
</form>
<script>
  $('#submit').click(function () {
    $('form').validate();
  })
</script>
```

<form class="validate" action="">
  <label>名称</label>
  <input type="text" required validate-err-msg="请输入名称" autocomplete="off">
  <label>名称</label>
  <input type="text" required>

  <div class="validate" required max='10'>

  </div>

  <button type="button" id="submit">提交</button>
</form>

<link rel="stylesheet" href="/js/jquery.form.css">

<script>
  console.log('script');
  require(['/js/jquery.form.js'], function () {
    $('#submit').click(function () {
      $('form').validate();
    })


  })

</script>


## 使用说明
- 完全使用代码做验证

```javascript

```
- 基于容器做验证
- - 在容器上添加类名 `.validate-field` 表示 标记那是需要验证的

- 仅仅对input做验证