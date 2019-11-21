
(function () {
    //对于很简单的表单 不添加class, 调用后自动添加class
    $.fn.registerValidate = function (option) {

    }
    //容器验证
    var validateContainer = function () {

    }

    //js验证
    window.ZooValidate = function(rules,option){
        
        this.check = function(){
            
        }
    }

    //验证规则
    var validateRules = {
        //必填
        required: function (el) {
            var val = $(el).val();
            return val ? true : false;
        },
        max: function (el) {
            var val = $(el).val();
            return val ? true : false;
        },
        // 大于
        '>':function(){
        
        }

    }
    

    //对表单进行验证
    $.fn.validate = function (option) {
        console.log('validate');

        var validateMessages = {
            //必填
            'require': '必填',
        }


        //出错后标记红边框
        $(this).find('input').each(function (index, el) {
            var rules = getRules(el)

            //验证规则
            if (rules.length) {
                for (var x in rules) {
                    var k = rules[x];
                    var vlidate = validateRules[k](el);;
                    //验证失败
                    if (vlidate !== true) {
                        //获取错误消息

                        //显示错误
                        inputError(el);
                        return;
                    }
                }
            }

        });


        /** 验证数据
         * 
         * @param {*} data 
         * @param {*} rules 
         * @param {*} message
         * 
         * @return 成功true 失败{name:'数据名',msg:'失败消息'}
         */
        function validateData(data, rules, message) {

        }

        //需要验证的规则
        function getRules(el) {
            var keys = Object.keys(validateRules);
            var rules = [];
            for (var x in keys) {
                var k = keys[x];
                if ($(el).attr(k)) {
                    rules.push(k);
                }
            }
            return rules;
        }


        //输入错误显示
        function inputError(el) {
            // $(el)[0].style.borderColor = 'red'
            if (!$(el).hasClass('validate-err')) {
                $(el).addClass('validate-err')
            }
        }

        /**验证错误
         * 
         * @param {*} el
         * 
         */
        function validate(el) {
            el = $(el)[0];
            if (el.tagName == 'INPUT') {

            }
            else {
                console.log('未知验证类型');
            }
        }

    }
})()


