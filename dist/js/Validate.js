!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.validate=r():e.validate=r()}(window,(function(){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();var a=function(){function e(r,t){var n=this,a=arguments;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.rule=r,this.messageRuleSetting=t,this.errorMsg="error",this.errorMsgs=[],this.validateRules={email:/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,number:/^-?\d*\.?\d+$/,chinese:/^[\u4e00-\u9fa5]+$/,idcard:/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,phone:/^[1][3-9][0-9]{9}$/,require:function(e){return!(null==e||""===e)},max:function(e,r){return!(JSON.stringify(e).length>parseInt(r))},min:function(e,r){return!(JSON.stringify(val).length<parseInt(pmax))},"<":function(){var e;(e=n.validateRules).lt.apply(e,a)},">":function(){var e;(e=n.validateRules).gt.apply(e,a)},"<=":function(){var e;(e=n.validateRules).elt.apply(e,a)},">=":function(){var e;(e=n.validateRules).egt.apply(e,a)},lt:function(e,r){return parseFloat(e)>parseFloat(r)},gt:function(e,r){return parseFloat(e)>parseFloat(r)},elt:function(e,r){return parseFloat(e)<=parseFloat(r)},egt:function(e,r){return parseFloat(e)>=parseFloat(r)},integer:function(e){return!isNaN(e)&&parseInt(e)==parseFloat(e)},in:function(){for(var e=1,r=a.length;e<r;e++)if(a[0]==a[e])return!0;return!1},notIn:function(){for(var e=1,r=a.length;e<r;e++)if(a[0]==a[e])return!1;return!0}},this.messagesRule={},this.message={number:"$0只能是数字",integer:"$0只能填整数",chinese:"$0只能是中文",email:"$0格式不正确",idcard:"$0格式不正确",phone:"$0格式不正确",require:"$0不能为空",length:"$0长度只能是$1到$2个字符",min:"$0的长度至少$1个",max:"$0的长度不能超过$1个",eq:"$0只能是$1",neq:"$0不能为$1",gt:"$0需要大于$1",">":"$0需要大于$1",lt:"$0需要小于$1","<":"$0需要小于$1",egt:"$0需要大于等于$1",">=":"$0需要大于等于$1",elt:"$0需要小于等于$1","<=":"$0需要小于等于$1",between:"$0值只能在$1到$2之间",in:"$0只能取$n",notIn:"$0不能在$n之间",confirm:"$0与:1不一致"},this.data={}}return n(e,[{key:"rule",value:function(){}},{key:"parse",value:function(e){var r=e.split("|"),t={};for(var n in r){var a=r[n].split(":"),i=a[0],u=a[1]?a[1].split(","):[];t[i]={name:i,args:u}}return t}},{key:"check",value:function(e,r){var t=this;this.errorMsgs=[],this.errorMsg="",r=r||!1,this.data=e;var n=function(){var n=a,o=n,s=t.rule[a],l=n.split("|");l.length>1&&(n=l[0],o=l[1]),i=t.parse(s);var f=function(){var a=i[u].args;if(!t.validateRules.require(e[n])&&!i.require)return"continue";if(!t.validateRules[u])return console.log("未定义验证规则"+u),"continue";if(!("function"==typeof t.validateRules[u]?t.validateRules[u].apply(t,[e[n]].concat(function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(a))):t.validateRules[u].test(e[n]))){var s=o+"参数错误";if(t.messageRuleSetting[u+"."+n]?s=t.messageRuleSetting[u+"."+n]:t.messageRuleSetting[n]?s=t.messageRuleSetting[n]:t.message[u]&&(s=t.message[u].repl,s=t.message[u].replace(/\$([\din])+/g,(function(e,r){if("$0"==e)return o;if("$n"==e)return a.join(",");var t=e.match(/\$([\dn]+)/),n=parseInt(t[1]);return a[n-1]}))),t.errorMsgs.push({field:n,name:o,rule:u,msg:s,args:a}),!r)return"break"}};e:for(u in i){switch(f()){case"continue":continue;case"break":break e}}t.errorMsgs.length&&(t.errorMsg=t.errorMsgs[0].msg)};for(var a in this.rule){var i,u;n()}return!this.errorMsgs.length}},{key:"getError",value:function(){return this.errorMsg}},{key:"getErrors",value:function(){return this.errorMsgs}},{key:"getErrorField",value:function(){}},{key:"getRules",value:function(e){}}]),e}();e.exports=a}])}));