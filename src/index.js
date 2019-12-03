


import Validate from './validate/Validate'


var plugins = {
  'Validate': './validate/Validate'
}

console.log('index.js 页面噢噢噢');

$('#submit').click(function (e) {
  var data = {};
  $('#demo1').find('input').each(function (index, el) {
    data[$(el).attr('name')] = $(el).val();
  })
  var validate = new Validate({
    // 'lang|长度': 'require|in:13,14,15,16,17,18',
    // 'password|密码': 'require|>:1',
    // 'username|用户名': 'require|max:6',
    // 'age|年龄': 'require|integer',
    // 'shengao|身高': 'integer',
    'qianming|签名': 'require|length:1,10',
    
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