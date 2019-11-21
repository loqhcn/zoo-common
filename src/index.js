


import Validate from './validate/Validate'


var plugins = {
  'Validate': './validate/Validate'
}

console.log('index.js 页面噢噢噢');

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