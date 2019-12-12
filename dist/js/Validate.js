!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.Validate=r():e.Validate=r()}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();var a=function(){function e(r,t){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.rule=r,this.messageRuleSetting=t||{},this.errorMsg="error",this.errorMsgs=[],this.debug=!1,this.validateRules={email:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,number:/^-?\d*\.?\d+$/,chinese:/^[\u4e00-\u9fa5]+$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,mobile:/^[1][3-9][0-9]{9}$/,require:function(e){return!(null==e||""===e)},max:function(e,r){return!((""+e).length>parseInt(r))},min:function(e,r){return!((""+e).length<parseInt(r))},"<":function(){var e;return(e=this.validateRules).lt.apply(e,arguments)},">":function(){var e;return(e=this.validateRules).gt.apply(e,arguments)},"<=":function(){var e;return(e=this.validateRules).elt.apply(e,arguments)},">=":function(){var e;return(e=this.validateRules).egt.apply(e,arguments)},lt:function(e,r){return parseFloat(e)<parseFloat(r)},gt:function(e,r){return parseFloat(e)>parseFloat(r)},elt:function(e,r){return parseFloat(e)<=parseFloat(r)},egt:function(e,r){return parseFloat(e)>=parseFloat(r)},integer:function(e){return!isNaN(e)&&parseInt(e)==parseFloat(e)},in:function(){for(var e=1,r=arguments.length;e<r;e++)if(arguments[0]==arguments[e])return!0;return!1},notIn:function(){for(var e=1,r=arguments.length;e<r;e++)if(arguments[0]==arguments[e])return!1;return!0},float:function(e){return/^[-+]?[0-9]*\.?[0-9]*$/.test(e)},bool:function(e){return this.validateRules.boolean(e)},boolean:function(e){return"boolean"==typeof e||("true"==e||"false"==e)},array:function(e){return Array.isArray(e)},accepted:function(e){return"yes"==e||"on"==e||1==parseInt(e)},length:function(e,r,t){return t?(e+"").length>=r&&(e+"").length<=t:(e+"").length==parseInt(r)}},this.message={number:"$0只能是数字",integer:"$0只能填整数",float:"$0只能浮点数",boolean:"$0只能填布尔值",bool:"$0只能填布尔值",email:"$0格式不正确",array:"$0数据类型不正确",accepted:"$0必须同意",chinese:"$0只能是中文",idcard:"$0格式不正确",mobile:"$0格式不正确",require:"$0不能为空",length:"$0长度只能是$1到$2个字符","length:1":"$0长度只能是$1",min:"$0的长度至少$1个",max:"$0的长度不能超过$1个",eq:"$0只能是$1",neq:"$0不能为$1",gt:"$0需要大于$1",">":"$0需要大于$1",lt:"$0需要小于$1","<":"$0需要小于$1",egt:"$0需要大于等于$1",">=":"$0需要大于等于$1",elt:"$0需要小于等于$1","<=":"$0需要小于等于$1",between:"$0值只能在$1到$2之间",in:"$0只能取$n",notIn:"$0不能在$n之间",confirm:"$0与:1不一致"},this.data={}}return n(e,[{key:"rule",value:function(){}},{key:"parse",value:function(e){var r=e.split("|"),t={};for(var n in r){var a=r[n].split(":"),u=a[0],o=a[1]?a[1].split(","):[];t[u]={name:u,args:o}}return t}},{key:"check",value:function(e,r,t){var n=this;this.errorMsgs=[],this.errorMsg="",r=r||!1,t=t||!1,this.data=e;var a=function(){var a=u,s=a,l=n.rule[u],f=a.split("|");f.length>1&&(a=f[0],s=f[1]),o=n.parse(l),n.debug&&console.log("解析规则",o);var c=[],g=function(){c.push("开始验证"+i);var r=o[i].args;if(!n.validateRules.require(e[a])&&!o.require)return c.push("没有填写可以不验证的"),"continue";if(!n.validateRules[i])return console.log("未定义验证规则"+i),c.push("未定义验证规则"+i),"continue";var u="function"==typeof n.validateRules[i]?n.validateRules[i].apply(n,[e[a]].concat(function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(r))):n.validateRules[i].test(e[a]);if(c.push({vArgs:r,data:e[a],validate:i,status:u?"成功":"失败"}),!u){var l=s+"参数错误";if(n.messageRuleSetting[a+"."+i])l=n.messageRuleSetting[a+"."+i];else if(n.messageRuleSetting[a])l=n.messageRuleSetting[a];else if(n.message[i]){var f=r.length;l=(n.message[i+":"+f]||n.message[i]).replace(/\$([\din])+/g,(function(e,t){if("$0"==e)return s;if("$n"==e)return r.join(",");var n=e.match(/\$([\dn]+)/),a=parseInt(n[1]);return r[a-1]}))}if(n.errorMsgs.push({field:a,name:s,rule:i,msg:l,args:r}),!t)return"break"}};e:for(i in o){switch(g()){case"continue":continue;case"break":break e}}if(n.debug&&console.log(c),n.errorMsgs.length&&(n.errorMsg=n.errorMsgs[0].msg,!r))return"break"};for(var u in this.rule){var o,i;if("break"===a())break}return!this.errorMsgs.length}},{key:"getError",value:function(){return this.errorMsg}},{key:"getErrorInfo",value:function(){return this.errorMsgs[0]}},{key:"getErrors",value:function(){return this.errorMsgs}},{key:"getErrorField",value:function(){return!!this.errorMsgs.length&&this.errorMsgs[0].field}},{key:"getRules",value:function(e){}}]),e}();e.exports=a}])}));