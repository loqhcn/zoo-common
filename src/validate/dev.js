import formValidate from './form.js'

// import $ from './../jquery-plugin/form.js';

$(function () {
    // window.parseRule = parseRule;
    window.$ = $;
    $('#validate1-do').click(function (e) {
        $('#from1').validateForm({
            //选择某个class作为验证容器
            validateClass: 'validate-field',
            //验证错误的时候 为元素追加一个
            errorClass: 'validate-err',
            // //由开发者定义显示错误的规则
            // showError: function (el,errmsg) {

            // },
            // //移除错误显示
            // removeError:function(el){

            // },
            // removeAllError:function(){

            // },

            //显示调试信息
            debug: true,
            //只显示第一条数据
            onlyOne: false,
        });

        e.preventDefault();
    })

})