(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{315:function(e,r,t){"use strict";var n={data:function(){var e=this;return{rules:{name:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],email:[{validator:function(r,t,n){var o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!t)return e.emailValidator=!1,n(new Error("邮箱不能为空"));setTimeout((function(){o.test(t)?(e.emailValidator=!0,n()):(e.emailValidator=!1,n(new Error("请输入正确的邮箱格式")))}),100)},trigger:"blur"}],checkPassword:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(r,t,n){t!==e.form.password?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]}}},methods:{alert:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;this.$message({message:e,type:r,duration:t})},confirm:function(e,r,t){var n,o=5;setInterval((function(){--o,n="<div>哈哈哈".concat(o,"</div>")}),1e3),this.$confirm(n,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"",dangerouslyUseHTMLString:!0,showClose:!1,closeOnClickModal:!1,distinguishCancelAndClose:!0,showCancelButton:t,type:r}).then((function(){}))}}};r.a=n},317:function(e,r,t){},322:function(e,r,t){"use strict";var n=t(317);t.n(n).a},330:function(e,r,t){"use strict";t.r(r);t(124),t(41),t(30),t(17),t(84);var n=t(66),o=(t(54),t(6)),c=t(315),l=t(85);function m(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var d={mixins:[c.a],layout:"user",data:function(){return{ruleForm:{name:"hg9558@126.com",password:"123456"}}},methods:{onSubmit:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,code,data,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=17;break}return e.next=3,Object(l.d)(f({},r.ruleForm));case 3:if(n=e.sent,code=n.code,data=n.data,o=n.message,1!=code){e.next=12;break}return r.alert(o),e.abrupt("return");case 12:c=data.token,localStorage.token=c,r.$router.push("/");case 15:e.next=19;break;case 17:return r.alert("请正确填写用户名和密码"),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}}},_=(t(322),t(4)),component=Object(_.a)(d,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login-container"},[t("el-form",{ref:"ruleForm",staticClass:"w_380 pl_10 pr_10 b_s mt_30 user-form",attrs:{model:e.ruleForm,rules:e.rules}},[t("el-form-item",{attrs:{prop:"name"}},[t("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-user",placeholder:"Enter email login"},model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{staticClass:"mt_20",attrs:{prop:"password"}},[t("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Password",type:"password"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1)],1),e._v(" "),t("div",{staticClass:"h_1 w_100p bgc_br mt_45 mb_20"}),e._v(" "),t("div",{staticClass:"action flex w_360"},[t("div",{staticClass:"w_145 h_35 bgc_b_b t_c lh_35 c_f ft_12 r_5 c_r",on:{click:function(r){return e.$router.push("/user/resetpassword")}}},[e._v("Lost password?")]),e._v(" "),t("div",{staticClass:"bgc_b_g w_60 h_35 t_c c_f r_5 lh_35 ft_12 c_r",on:{click:function(r){return e.onSubmit("ruleForm")}}},[e._v("Login")])])],1)}),[],!1,null,"acce2102",null);r.default=component.exports}}]);