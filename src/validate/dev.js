import formValidate from './form.js'

$(function () {
    // window.parseRule = parseRule;
    window.$ = $;
    $('#validate1-do').click(function (e) {
        $('#from1').validateForm({
            //选择某个class作为验证容器
            validateClass: 'validate-field',
            //验证错误的时候 为元素追加一个
            errorClass: 'validate-err',
            //禁用 验证错误后再更正 后的重新验证
            disableReValidate:false,

            // // 由开发者定义显示错误的规则
            // showError: function (errmsg , el , dataEl) {
            //     dataEl.style.borderColor='red';
            //     alert(errmsg);
            // },
            // //移除所有错误显示 如果需要自定义错误
            // removeAllError:function(){

            // },
            // //移除错误显示
            // removeError:function(el,dataEl){
            //     console.log(el)
            //     dataEl.style.borderColor = null;
            // },

            //则只验证第一条
            // onlyOneError:true,
            //显示调试信息
            debug: false,

            errorMsg:{
                "name.require":"名字必须填写哦",
                "name.max":"名字嘴唇昂",
            },
            //当required验证错误时, 尝试读取placeholder内容作为错误消息
            // placeholderMsg: true,

        });

        e.preventDefault();
    })

})