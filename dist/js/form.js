!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("jquery"));else if("function"==typeof define&&define.amd)define(["jquery"],r);else{var t="object"==typeof exports?r(require("jquery")):r(e.$);for(var n in t)("object"==typeof exports?exports:e)[n]=t[n]}}(window,(function(e){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,r){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},function(e,r){function t(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},function(e,r,t){"use strict";(function(e){var n=t(0);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t(1)),o=n(t(2)),i=n(t(5));t(10);var l=t(14),u=l.parseJsx;var s=new(function(){function r(){(0,a.default)(this,r),this.debug=!1,this.option={},this.parseRuleData={radio:function(r){for(var t=e(r),n=0;n<t.length;n++){var a=t[n];if(a.checked)return a.value||n}return null},checkbox:function(r){var t=e(r)[0];return!!t.checked||null}},this.rules={required:{rule:"require"},maxlength:{rule:"max"},minlength:{rule:"min"},lt:{rule:"lt"},gt:{rule:"gt"},notin:{rule:"notIn"},in:{rule:"in"},integer:{rule:"integer"},number:{rule:"number"},mobile:{rule:"mobile"},email:{rule:"email"},idcard:{rule:"idcard"}},this.componentsActions={input:"blur",checkbox:"change","select-one":"change",select:"change",radio:"change"}}return(0,o.default)(r,[{key:"getHandleType",value:function(e){}},{key:"setOption",value:function(e){this.option=e}},{key:"parseRule",value:function(r,t){if("radio"==(r=e(r)[0]).type)return{error:"radio需要使用父容器验证",errorType:"radio",el:r};for(var n=[],a=0;a<r.attributes.length;a++){var o=r.attributes[a].name;"required"==o&&n.length&&(o=n[0],n[0]="required"),n.push(o)}Object.keys(this.rules);var i=e(r).attr("name"),l=e(r).attr("name-show"),u=e(r).val(),s=t||r,c=e(s).type||e(s)[0].type;if(t&&(i=e(t).attr("name"),u=e(t).val()),this.parseRuleData[c]&&(u=this.parseRuleData[c](s)),!i)return{error:"未获取到name",errorType:"noname",el:r,valSelecter:t};for(var f={},d={},p=0;p<n.length;p++)if(this.rules[n[p]]){var v=this.rules[n[p]],h=e(r).attr(n[p]);f[v.rule]=h,d[n[p]]={attrName:n[p],ruleName:v.rule,rule:h}}var g=[];for(var m in d){var b=d[m].rule&&d[m].rule!=d[m].attrName?":"+d[m].rule:"";g.push("".concat(d[m].ruleName).concat(b))}var y=e(r).attr("validate-action")||(this.componentsActions[c]?this.componentsActions[c]:"blur");return{error:!1,el:r,dataEl:e(s)[0],name:i,elNameShow:l,val:u,rule:g.join("|"),ruleObj:f,actionName:y,ruleParseData:d}}},{key:"registerValidate",value:function(r,t,n){var a=this;t=t||"change";var o=function(t){var o=[r],l=s.parseValidateElItem(o),u=l.validateRules,c=(l.validateFieldsEl,l.data),f=new i.default(u,a.option.errorMsg);if(a.option.removeAction?a.option.removeError:a.removeError(r,n),!f.check(c,!0)){var d=f.getErrorInfo(),p=e(r).attr("errormsg")||d.msg;a.option.placeholderMsg&&n.placeholder&&"require"==d.rule&&(p=n.placeholder),a.option.showError?a.option.showError(p,r,n,!0):a.showError(p,r,n,!0)}};e(r).on(t,o),"radio"!=n.type&&e(n).on(t,o)}},{key:"isContainerEl",value:function(e){for(var r=["div"],t=0;t<r.length;t++){var n=r[t];if(n.tagName==n)return!0}return!1}},{key:"showError",value:function(r,t,n){t.validateError=!0,e(t).addClass(this.option.errorClass);var a=u("label",{class:"validate-err-msg"},u("div",{class:"validate-err-msg-content"},r));a=(0,l.render)(a),e(t).after(a)}},{key:"removeError",value:function(r,t){(e(r).removeClass(this.option.errorClass),1==r.validateError)&&(e(r).next().remove(),r.validateError=!1)}},{key:"removeAllError",value:function(r){e(r).find(this.option.errorClass).removeClass(this.option.errorClass),e(".validate-err-msg").remove()}},{key:"parseValidateElItem",value:function(r){for(var t=[],n={},a=[],o=0;o<r.length;o++){var i=r[o],l=e(i).attr("validate-field")||!1,u=this.parseRule(i,l);u.error?this.debug&&console.log("rule error",u):n[u.name]?a.push("已存在规则".concat(u.name)):(n[u.name]=u,t.push(u))}this.debug&&console.log("解析出规则",t);for(var s={},c={},f={},d={},p={},v=0;v<t.length;v++){var h=t[v],g=h.elNameShow?"|"+h.elNameShow:"";s[h.name+g]=h.rule,p[h.name]=h.val,c[h.name]=h.el,f[h.name]=h.dataEl,d[h.name]=h.actionName}return this.debug&&a.length&&console.log("规则解析记录",a),{validateRules:s,validateFieldsEl:c,validateFieldsDataEl:f,data:p,validateFieldsAction:d}}},{key:"getFieldActionType",value:function(){}}]),r}());e.fn.validateForm=function(r){r={validateClass:(r=r||{}).validateClass||"validate-field",errorClass:r.errorClass||"validate-err",debug:r.debug,showError:r.showError||!1,removeError:r.removeError||!1,removeAllError:r.removeAllError||!1,placeholderMsg:void 0!==r.placeholderMsg&&r.placeholderMsg,onlyOneError:void 0!==r.onlyOneError&&r.onlyOneError,errorMsg:r.errorMsg||{},disableReValidate:void 0!==r.disableReValidate&&r.disableReValidate},s.debug=r.debug,s.setOption(r),s.removeAllError(this);var t=e(".".concat(r.validateClass,",input,select,textarea")),n=s.parseValidateElItem(t),a=n.validateRules,o=n.validateFieldsEl,l=n.validateFieldsDataEl,u=n.data,c=n.validateFieldsAction;console.log(a);var f=new i.default(a,r.errorMsg);if(f.debug=r.debug,!f.check(u,!r.onlyOneError)){for(var d=f.getErrors(),p=0;p<d.length;p++){var v=d[p],h=o[v.field],g=l[v.field],m=e(o[v.field]).attr("errormsg")||v.msg;r.placeholderMsg&&g.placeholder&&"require"==v.rule&&(m=g.placeholder),r.showError?r.showError(m,h,g):s.showError(m,h,g);var b=c[v.field]||"blur";r.disableReValidate||s.registerValidate(h,b,g)}return!1}return!0};var c=s;r.default=c}).call(this,t(4))},function(r,t){r.exports=e},function(e,r,t){"use strict";var n=t(0),a=n(t(6)),o=n(t(1)),i=n(t(2)),l=function(){function e(r,t){(0,o.default)(this,e),this.rule=r,this.messageRuleSetting=t||{},this.errorMsg="error",this.errorMsgs=[],this.debug=!1,this.validateRules={email:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,number:/^-?\d*\.?\d+$/,chinese:/^[\u4e00-\u9fa5]+$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,mobile:/^[1][3-9][0-9]{9}$/,require:function(e){return!(null==e||""===e)},max:function(e,r){return!((""+e).length>parseInt(r))},min:function(e,r){return!((""+e).length<parseInt(r))},"<":function(){var e;return(e=this.validateRules).lt.apply(e,arguments)},">":function(){var e;return(e=this.validateRules).gt.apply(e,arguments)},"<=":function(){var e;return(e=this.validateRules).elt.apply(e,arguments)},">=":function(){var e;return(e=this.validateRules).egt.apply(e,arguments)},lt:function(e,r){return parseFloat(e)<parseFloat(r)},gt:function(e,r){return parseFloat(e)>parseFloat(r)},elt:function(e,r){return parseFloat(e)<=parseFloat(r)},egt:function(e,r){return parseFloat(e)>=parseFloat(r)},integer:function(e){return!isNaN(e)&&parseInt(e)==parseFloat(e)},in:function(){for(var e=1,r=arguments.length;e<r;e++)if(arguments[0]==arguments[e])return!0;return!1},notIn:function(){for(var e=1,r=arguments.length;e<r;e++)if(arguments[0]==arguments[e])return!1;return!0},float:function(e){return/^[-+]?[0-9]*\.?[0-9]*$/.test(e)},bool:function(e){return this.validateRules.boolean(e)},boolean:function(e){return"boolean"==typeof e||("true"==e||"false"==e)},array:function(e){return Array.isArray(e)},accepted:function(e){return"yes"==e||"on"==e||1==parseInt(e)},length:function(e,r,t){return t?(e+"").length>=r&&(e+"").length<=t:(e+"").length==parseInt(r)}},this.message={number:"$0只能是数字",integer:"$0只能填整数",float:"$0只能浮点数",boolean:"$0只能填布尔值",bool:"$0只能填布尔值",email:"$0格式不正确",array:"$0数据类型不正确",accepted:"$0必须同意",chinese:"$0只能是中文",idcard:"$0格式不正确",mobile:"$0格式不正确",require:"$0不能为空",length:"$0长度只能是$1到$2个字符","length:1":"$0长度只能是$1",min:"$0的长度至少$1个",max:"$0的长度不能超过$1个",eq:"$0只能是$1",neq:"$0不能为$1",gt:"$0需要大于$1",">":"$0需要大于$1",lt:"$0需要小于$1","<":"$0需要小于$1",egt:"$0需要大于等于$1",">=":"$0需要大于等于$1",elt:"$0需要小于等于$1","<=":"$0需要小于等于$1",between:"$0值只能在$1到$2之间",in:"$0只能取$n",notIn:"$0不能在$n之间",confirm:"$0与:1不一致"},this.data={}}return(0,i.default)(e,[{key:"rule",value:function(){}},{key:"parse",value:function(e){var r=e.split("|"),t={};for(var n in r){var a=r[n].split(":"),o=a[0],i=a[1]?a[1].split(","):[];t[o]={name:o,args:i}}return t}},{key:"check",value:function(e,r,t){var n=this;this.errorMsgs=[],this.errorMsg="",r=r||!1,t=t||!1,this.data=e;var o=function(){var o=i,s=o,c=n.rule[i],f=o.split("|");f.length>1&&(o=f[0],s=f[1]),l=n.parse(c),n.debug&&console.log("解析规则",l);var d=[],p=function(){d.push("开始验证"+u);var r=l[u].args;if(!n.validateRules.require(e[o])&&!l.require)return d.push("没有填写可以不验证的"),"continue";if(!n.validateRules[u])return console.log("未定义验证规则".concat(u)),d.push("未定义验证规则".concat(u)),"continue";var i="function"==typeof n.validateRules[u]?n.validateRules[u].apply(n,[e[o]].concat((0,a.default)(r))):n.validateRules[u].test(e[o]);if(d.push({vArgs:r,data:e[o],validate:u,status:i?"成功":"失败"}),!i){var c="".concat(s,"参数错误");if(n.messageRuleSetting["".concat(o,".").concat(u)])c=n.messageRuleSetting["".concat(o,".").concat(u)];else if(n.messageRuleSetting[o])c=n.messageRuleSetting[o];else if(n.message[u]){var f=r.length;c=(n.message[u+":"+f]||n.message[u]).replace(/\$([\din])+/g,(function(e,t){if("$0"==e)return s;if("$n"==e)return r.join(",");var n=e.match(/\$([\dn]+)/),a=parseInt(n[1]);return r[a-1]}))}if(n.errorMsgs.push({field:o,name:s,rule:u,msg:c,args:r}),!t)return"break"}};e:for(u in l){switch(p()){case"continue":continue;case"break":break e}}if(n.debug&&console.log(d),n.errorMsgs.length&&(n.errorMsg=n.errorMsgs[0].msg,!r))return"break"};for(var i in this.rule){var l,u;if("break"===o())break}return!this.errorMsgs.length}},{key:"getError",value:function(){return this.errorMsg}},{key:"getErrorInfo",value:function(){return this.errorMsgs[0]}},{key:"getErrors",value:function(){return this.errorMsgs}},{key:"getErrorField",value:function(){return!!this.errorMsgs.length&&this.errorMsgs[0].field}},{key:"getRules",value:function(e){}}]),e}();e.exports=l},function(e,r,t){var n=t(7),a=t(8),o=t(9);e.exports=function(e){return n(e)||a(e)||o()}},function(e,r){e.exports=function(e){if(Array.isArray(e)){for(var r=0,t=new Array(e.length);r<e.length;r++)t[r]=e[r];return t}}},function(e,r){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(e,r,t){var n=t(11);"string"==typeof n&&(n=[[e.i,n,""]]);var a={insert:"head",singleton:!1};t(13)(n,a);n.locals&&(e.exports=n.locals)},function(e,r,t){var n=t(12);(e.exports=n(!1)).push([e.i,".validate-err {\r\n    border-color: red;\r\n}\r\n\r\n.validate-err-msg {\r\n    margin: 0;\r\n    position: relative;\r\n}\r\n\r\n.validate-err-msg-content {\r\n    position: absolute;\r\n    display: block;\r\n    color: red;\r\n    white-space: nowrap;\r\n}",""])},function(e,r,t){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=function(e,r){var t=e[1]||"",n=e[3];if(!n)return t;if(r&&"function"==typeof btoa){var a=(i=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot).concat(e," */")}));return[t].concat(o).concat([a]).join("\n")}var i,l,u;return[t].join("\n")}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n=0;n<e.length;n++){var a=[].concat(e[n]);t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),r.push(a)}},r}},function(e,r,t){"use strict";var n,a={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[r]=t}return e[r]}}();function l(e,r){for(var t=[],n={},a=0;a<e.length;a++){var o=e[a],i=r.base?o[0]+r.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(l):t.push(n[i]={id:i,parts:[l]})}return t}function u(e,r){for(var t=0;t<e.length;t++){var n=e[t],o=a[n.id],i=0;if(o){for(o.refs++;i<o.parts.length;i++)o.parts[i](n.parts[i]);for(;i<n.parts.length;i++)o.parts.push(g(n.parts[i],r))}else{for(var l=[];i<n.parts.length;i++)l.push(g(n.parts[i],r));a[n.id]={id:n.id,refs:1,parts:l}}}}function s(e){var r=document.createElement("style");if(void 0===e.attributes.nonce){var n=t.nc;n&&(e.attributes.nonce=n)}if(Object.keys(e.attributes).forEach((function(t){r.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(r);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var c,f=(c=[],function(e,r){return c[e]=r,c.filter(Boolean).join("\n")});function d(e,r,t,n){var a=t?"":n.css;if(e.styleSheet)e.styleSheet.cssText=f(r,a);else{var o=document.createTextNode(a),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(o,i[r]):e.appendChild(o)}}function p(e,r,t){var n=t.css,a=t.media,o=t.sourceMap;if(a&&e.setAttribute("media",a),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var v=null,h=0;function g(e,r){var t,n,a;if(r.singleton){var o=h++;t=v||(v=s(r)),n=d.bind(null,t,o,!1),a=d.bind(null,t,o,!0)}else t=s(r),n=p.bind(null,t,r),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return n(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;n(e=r)}else a()}}e.exports=function(e,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=l(e,r);return u(t,r),function(e){for(var n=[],o=0;o<t.length;o++){var i=t[o],s=a[i.id];s&&(s.refs--,n.push(s))}e&&u(l(e,r),r);for(var c=0;c<n.length;c++){var f=n[c];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete a[f.id]}}}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.parseJsx=function(e,r){for(var t,n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];var i=a.length?(t=[]).concat.apply(t,a):null;return{nodeName:e,attributes:r,children:i}},r.render=function e(r){if(!r)return null;if(r.split)return document.createTextNode(r);var t=document.createElement(r.nodeName),n=r.attributes||{};return Object.keys(n).forEach((function(e){return t.setAttribute(e,n[e])})),(r.children||[]).forEach((function(r){return t.appendChild(e(r))})),t}}])}));