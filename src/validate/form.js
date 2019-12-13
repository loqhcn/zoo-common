

import Validate from './Validate.js'
import './form.css'
import { parseJsx, render } from './../jsx/parseJsx'

const dom = parseJsx;
function DomFrag() {
    console.log('DomFrag', arguments);
}

class FormValidate {
    constructor() {
        this.debug = false;
        this.option = {};

        //某些标签的数据进行特殊处理 否则验证结果不能达到预期
        this.parseRuleData = {
            radio: function (dataEl) {
                let radios = $(dataEl)
                for (let index = 0; index < radios.length; index++) {
                    const element = radios[index];
                    if (element.checked) {
                        //未设置value返回index
                        return element.value || index;
                    }
                }
                return null;
            },
            checkbox: function (dataEl) {

                let checkbox = $(dataEl)[0]

                return checkbox.checked ? true : null;
            }
        }
        //标签名称与验证名称及验证配置关联
        this.rules = {
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

        /**
         * 不通元素的已完善的监听方法
         * 
         */
        this.componentsActions = {
            'input': 'blur',
            'checkbox': 'change',
            'select-one': 'change',
            'select': 'change',
            'radio': 'change',
        }


    }

    /**
     * 处理元素的类型
     * 
     */
    getHandleType(el) {

    }

    setOption(option) {
        this.option = option;
    }

    /** 解析验证节点配置数据 
     * 
     * @param {*} el 
     * @param {*} valSelecter jquery选择器,指定value读取的位置
     * 
     * @return 详细验证配置对象
     */
    parseRule(el, valSelecter) {

        el = $(el)[0];
        // valSelecter = valSelecter ? $(valSelecter)[0] : false;
        if (el.type == 'radio') {
            return {
                error: 'radio需要使用父容器验证',
                errorType: 'radio',
                el: el
            }
        }
        // if (el.type == 'checkbox') {
        //     return {
        //         error: 'checkbox需要使用父容器验证',
        //         errorType: 'checkbox',
        //         el: el
        //     }
        // }
        // console.log(el)

        //el所有属性
        let attrNames = [];
        for (let index = 0; index < el.attributes.length; index++) {
            const elementName = el.attributes[index].name;
            //require 始终第一个验证 交换顺序
            if(elementName=='required' && attrNames.length){
                elementName =   attrNames[0];
                attrNames[0] =  'required';
            }
            attrNames.push(elementName);
        }
        // console.log( el.attributes);
        // console.log(attrNames);

        //let attrNames = el.getAttributeNames(); 不兼容ie 放弃使用
        let ruleNames = Object.keys(this.rules);

        // 获取元素的name和val  @读取方式有待改进,目前只支持普通input框

        //名称
        let elName = $(el).attr('name');
        let elNameShow = $(el).attr('name-show');
        let elVal = $(el).val();

        //值得容器:selecter
        let dataEl = valSelecter ? (valSelecter) : el;
        let valSelecterType = $(dataEl).type || $(dataEl)[0].type;

        if (valSelecter) {
            elName = $(valSelecter).attr('name');
            elVal = $(valSelecter).val()
            // console.log('parse',valSelecter,elVal,valSelecterType)
        }
        // 特殊表单组件 radio checkbox
        if (this.parseRuleData[valSelecterType]) {
            elVal = this.parseRuleData[valSelecterType](dataEl);

        }

        if (!elName) {
            return {
                error: '未获取到name',
                errorType: 'noname',
                el: el,
                valSelecter: valSelecter,
            }
        }

        let ruleObj = {};
        let ruleParseData = {};
        for (let index = 0; index < attrNames.length; index++) {
            if (this.rules[attrNames[index]]) {
                let ruleInfo = this.rules[attrNames[index]];
                // 规则 = 规则配置
                let ruleData = $(el).attr(attrNames[index]);
                ruleObj[ruleInfo['rule']] = ruleData;

                //规则解析详情
                ruleParseData[attrNames[index]] = {
                    attrName: attrNames[index],
                    ruleName: ruleInfo.rule,
                    rule: ruleData
                }
            }
        }
        //生成规则str
        let ruleStrs = [];
        for (var x in ruleParseData) {
            // required|max:1|email
            let valstr =
                ruleParseData[x].rule
                    && ruleParseData[x].rule != ruleParseData[x].attrName
                    ? ':' + ruleParseData[x].rule : '';

            ruleStrs.push(`${ruleParseData[x]['ruleName']}${valstr}`)
        }


        //
        // console.log('valSelecterType:'+valSelecterType)
        let actionName = $(el).attr('validate-action') ||
            (this.componentsActions[valSelecterType] ? this.componentsActions[valSelecterType] : 'blur');



        return {
            error: false,
            //验证信息位置
            el: el,
            dataEl: $(dataEl)[0],
            //你name
            name: elName,
            //显示name
            elNameShow: elNameShow,
            //元素的值
            val: elVal,
            //验证规则
            rule: ruleStrs.join('|'),
            //验证规则对象
            ruleObj: ruleObj,
            // 当元素验证错误 完善后再次出发验证的事件 
            actionName: actionName,
            ruleParseData
        }
    }

    /** 为验证节点注册验证事件
     * @desc 验证后
     * 
     * @param {function} removeAction 移除错误消息的回调
     */
    registerValidate(el, action, dataEl) {

        action = action || 'change';

        const updateAction = (e) => {
            //验证

            //验证成功 移除验证事件监听
            var items = [el];
            const {
                validateRules,
                validateFieldsEl,
                data
            } = formValidate.parseValidateElItem(items);
            //验证
            var validate = new Validate(validateRules, this.option.errorMsg);

            //移除错误
            // ( this.option.removeAction || this.removeError )(el,dataEl);
            this.option.removeAction ? this.option.removeError : this.removeError(el, dataEl);

            //显示新错误 或 验证成功
            if (!validate.check(data, true)) {
                let err = validate.getErrorInfo();

                let errmsg = $(el).attr('errormsg') || err.msg;

                if (this.option.placeholderMsg && dataEl.placeholder && err.rule == 'require') {

                    errmsg = dataEl.placeholder;
                }

                //错误消息
                this.option.showError ? this.option.showError(errmsg, el, dataEl, true) : this.showError(errmsg, el, dataEl, true);
            }
        }

        $(el).on(action, updateAction)
        if (dataEl.type != 'radio') {
            $(dataEl).on(action, updateAction)
        }


    }

    /**
     * 验证节点是否为容器
     * @desc 用于判断提示消息插入到容器内部
     * 
     */
    isContainerEl(el) {
        let containerTags = ['div'];
        for (let index = 0; index < containerTags.length; index++) {
            const element = containerTags[index];
            if (element.tagName == element) {
                return true;
            }
        }
        return false
    }

    /**
     * 显示错误
     * @param {*} el 
     * @param {*} error 
     */
    showError(errmsg, el, dataEl) {

        el.validateError = true;
        //显示错误的类
        $(el).addClass(this.option.errorClass);
        let after =
            <label class="validate-err-msg">
                <div class="validate-err-msg-content">{errmsg}</div>
            </label>
        after = render(after);
        $(el).after(after)
    }
    /**
     * 移除错误
     * @param {*} el 
     */
    removeError(el, dataEl) {

        $(el).removeClass(this.option.errorClass);
        if (el.validateError == true) {
            let err = $(el).next();
            err.remove();
            el.validateError = false;
        }
    }

    removeAllError(totalContainer) {
        $(totalContainer).find(this.option.errorClass).removeClass(this.option.errorClass);
        $('.validate-err-msg').remove();

    }

    /**
     * 解析需要处理的节点
     * 
     * @param {el Array} items
     * 
     * @return { validateRules验证规则, validateFieldsEl与验证关联的el, data数据  }
     */
    parseValidateElItem(items) {

        let elRule = [];
        let parseedRules = {};
        let parseItemLog = [];
        //验证的字段
        for (let index = 0; index < items.length; index++) {
            const el = items[index];
            let valSelecter = $(el).attr('validate-field') || false;

            let rule = this.parseRule(el, valSelecter)

            if (rule.error) {
                // 规则配置错误信息
                if (this.debug) {
                    console.log('rule error', rule)
                }
                continue;
            }

            //防止重复添加同名称规则
            if (parseedRules[rule.name]) {
                parseItemLog.push(`已存在规则${rule.name}`);
                continue;
            }
            parseedRules[rule.name] = rule;
            elRule.push(rule);
        }

        if (this.debug) {
            console.log('解析出规则', elRule);
        }

        //
        //rule获取 字符串内容
        let validateRules = {}
        //验证节点 与 名称关联 方便显示消息 
        let validateFieldsEl = {}
        let validateFieldsDataEl = {}

        // 监听事件 补全后重新验证
        let validateFieldsAction = {};

        let data = {}
        for (let index = 0; index < elRule.length; index++) {
            const element = elRule[index];
            //rules
            let elNameShow = element.elNameShow ? '|' + element.elNameShow : '';
            validateRules[element.name + elNameShow] = element.rule
            //data
            data[element.name] = element.val
            //关联信息
            validateFieldsEl[element.name] = element.el
            validateFieldsDataEl[element.name] = element.dataEl

            validateFieldsAction[element.name] = element.actionName
        }

        if (this.debug && parseItemLog.length) {
            console.log('规则解析记录', parseItemLog)
        }
        return {
            //验证规则 Validate.js参数
            validateRules,
            //关联字段的el 数据位置的el
            validateFieldsEl,
            validateFieldsDataEl,
            //数据列表
            data,
            validateFieldsAction
        }

    }

    /**
     * 获取注册事件类型
     * 
     */
    getFieldActionType() {
        let actionSet = {
            'input': 'blur',
            'radio': 'change',
            'select': 'change',
        }
    }

}


let formValidate = new FormValidate();
$.fn.validateForm = function (option) {

    option = option || {}
    option = {
        validateClass: option.validateClass || 'validate-field',
        errorClass: option.errorClass || 'validate-err',

        debug: option.debug,
        //验证错误的显示与移除
        showError: option.showError || false,
        removeError: option.removeError || false,
        removeAllError: option.removeAllError || false,

        //当required验证错误时, 尝试读取placeholder内容作为错误消息
        placeholderMsg: option.placeholderMsg !== undefined ? option.placeholderMsg : false,
        //只要一条错误消息? bool
        onlyOneError: option.onlyOneError !== undefined ? option.onlyOneError : false,
        errorMsg: option.errorMsg || {},
        disableReValidate: option.disableReValidate !== undefined ? option.disableReValidate : false,
    }
    formValidate.debug = option.debug;
    formValidate.setOption(option);

    //移除所有显示错误
    formValidate.removeAllError(this);

    //解析验证的节点的配置规则
    var items = $(`.${option.validateClass},input,select,textarea`);
    const {
        validateRules,
        validateFieldsEl,
        validateFieldsDataEl,
        data,
        validateFieldsAction,
    } = formValidate.parseValidateElItem(items);

    //验证
    console.log(validateRules);
    var validate = new Validate(validateRules, option.errorMsg);
    validate.debug = option.debug;

    if (!validate.check(data, !option.onlyOneError)) {
        //错误显示  
        let errors = validate.getErrors();

        for (let index = 0; index < errors.length; index++) {
            const err = errors[index];
            let errEl = validateFieldsEl[err.field];
            let errDataEl = validateFieldsDataEl[err.field];

            //错误消息
            let errmsg = $(validateFieldsEl[err.field]).attr('errormsg') || err.msg;

            if (option.placeholderMsg && errDataEl.placeholder && err.rule == 'require') {
                errmsg = errDataEl.placeholder;
            }

            //展示错误
            option.showError ? option.showError(errmsg, errEl, errDataEl)
                : formValidate.showError(errmsg, errEl, errDataEl);

            //注册重新验证事件
            let regAction = validateFieldsAction[err.field] || 'blur';
            if (!option.disableReValidate) {
                formValidate.registerValidate(errEl, regAction, errDataEl);
            }

        }
        return false;
    }
    //验证成功
    return true;

}

export default formValidate;

