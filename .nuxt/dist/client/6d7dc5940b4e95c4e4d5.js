(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{315:function(e,t,r){"use strict";var n={data:function(){var e=this;return{rules:{name:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],email:[{validator:function(t,r,n){var o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!r)return e.emailValidator=!1,n(new Error("邮箱不能为空"));setTimeout((function(){o.test(r)?(e.emailValidator=!0,n()):(e.emailValidator=!1,n(new Error("请输入正确的邮箱格式")))}),100)},trigger:"blur"}],checkPassword:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(t,r,n){r!==e.form.password?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]}}},methods:{alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;this.$message({message:e,type:t,duration:r})},confirm:function(e,t,r){var n,o=5;setInterval((function(){--o,n="<div>哈哈哈".concat(o,"</div>")}),1e3),this.$confirm(n,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"",dangerouslyUseHTMLString:!0,showClose:!1,closeOnClickModal:!1,distinguishCancelAndClose:!0,showCancelButton:r,type:t}).then((function(){}))}}};t.a=n},319:function(e,t,r){},320:function(e,t,r){},324:function(e,t,r){"use strict";var n=r(319);r.n(n).a},325:function(e,t,r){"use strict";var n=r(320);r.n(n).a},326:function(e,t,r){"use strict";r.r(t);r(54);var n,o=r(6),c=r(315),l=r(85),m=(r(125),{mounted:function(){var e=this;this.time=setInterval((function(){--e.timer,0==e.timer&&e.$router.replace("/user/login")}),1e3)},data:function(){return{time:null,timer:5}},destroyed:function(){clearInterval(this.time),console.log(this.time)}}),f=(r(324),r(4)),d=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"masker-container p_fix w_100p hp_100 z_999 p_l_0 pr_0 bgc_o5 p_t_0"},[r("div",{staticClass:"masker-main w_420 bgc_f pd_10 pb_10 r_4 ft_18"},[r("div",{staticClass:"title mb_20 c_s ft_b"},[e._v("温馨提示")]),e._v(" "),r("div",{staticClass:"content ft_16  mb_20 t_c"},[r("el-button",{attrs:{type:"success",icon:"el-icon-check",circle:""}}),e._v("\n      恭喜您，密码修改成功，将在\n      "),r("span",{staticClass:"c_s"},[e._v("0"+e._s(e.timer))]),e._v("\n      之后跳转登录页面\n    ")],1),e._v(" "),r("div",{staticClass:"t_r"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.$router.replace("/user/login")}}},[e._v("马上登录")])],1)])])}),[],!1,null,"68b5478e",null).exports,_={mixins:[c.a],layout:"usersetting",components:{successMasker:d},data:function(){return{activeNumber:0,isLoading:!1,form:{email:"hg9558@126.com",code:"",password:"",checkPassword:""}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=14;break}t.isLoading=!0,"",e.t0=t.activeNumber,e.next=0===e.t0?6:1===e.t0?8:2===e.t0?10:12;break;case 6:return t.onNextStep(l.a,1),e.abrupt("break",12);case 8:return t.onNextStep(l.e,2),e.abrupt("break",12);case 10:return t.onNextStep(l.g,4),e.abrupt("break",12);case 12:e.next=16;break;case 14:return t.alert("请正确填写邮箱"),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},onNextStep:(n=Object(o.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(this.form);case 2:if((n=e.sent).code,o=n.message,n.data,this.isLoading=!1,!o){e.next=10;break}return this.alert(o),e.abrupt("return");case 10:r&&(this.activeNumber=r);case 11:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})}},v=(r(325),Object(f.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rest-wrapper wp_100 h_80  p_r mt_60"},[r("div",{staticClass:"step-box w_1000 mg_0a"},[r("el-steps",{attrs:{space:650,active:e.activeNumber,"finish-status":"success","align-center":!0,"process-status":"error "}},[r("el-step",{attrs:{icon:"el-icon-message",title:"确认邮箱"}}),e._v(" "),r("el-step",{attrs:{icon:"el-icon-s-unfold",title:"填写验证码"}}),e._v(" "),r("el-step",{attrs:{icon:"el-icon-s-goods",title:"重置密码"}}),e._v(" "),r("el-step",{attrs:{icon:"el-icon-success",title:"成功"}})],1)],1),e._v(" "),r("el-form",{ref:"form",staticClass:"w_839 mt_75",attrs:{model:e.form,inline:2!==e.activeNumber,rules:e.rules,"label-width":"120px"}},[0==e.activeNumber?r("el-form-item",{attrs:{label:"请输入邮箱地址",prop:"email"}},[r("el-input",{staticClass:"w_200",model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1):e._e(),e._v(" "),1==e.activeNumber?r("el-form-item",{attrs:{"label-width":"200px",label:"请输入获取到的验证码",prop:"code"}},[r("el-input",{staticClass:"w_300",model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1):e._e(),e._v(" "),2==e.activeNumber?r("el-form-item",{attrs:{label:"请输入密码",prop:"password","label-width":"200px"}},[r("el-input",{staticClass:"w_300",attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1):e._e(),e._v(" "),2==e.activeNumber?r("el-form-item",{staticClass:"mt_20",attrs:{label:"请再次输入密码","label-width":"200px",prop:"checkPassword"}},[r("el-input",{staticClass:"w_300 ",attrs:{type:"password"},model:{value:e.form.checkPassword,callback:function(t){e.$set(e.form,"checkPassword",t)},expression:"form.checkPassword"}})],1):e._e(),e._v(" "),r("el-form-item",{class:{threeStyle:2==e.activeNumber}},[4!=e.activeNumber?r("el-button",{staticClass:"123",attrs:{type:"primary",loading:e.isLoading},on:{click:function(t){return e.onSubmit("form")}}},[e._v("下一步")]):e._e()],1)],1),e._v(" "),4==e.activeNumber?r("success-masker",{attrs:{msg:""}}):e._e()],1)}),[],!1,null,"905f061a",null));t.default=v.exports}}]);