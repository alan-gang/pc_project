(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(t,e,r){"use strict";e.a={data:function(){return{}},methods:{alert:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;this.$message({message:t,type:e,duration:r})},confirm:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r=arguments.length>2?arguments[2]:void 0;this.$alert(t,"温馨提示",{confirmButtonText:"确定",type:e,callback:r})},prompt:function(t,e){var r=this;this.$confirm(t,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:"warning"}).then(e).catch((function(){r.$message({type:"success",message:"您是对的，三思而后行",duration:1e3})}))}}}},336:function(t,e,r){},343:function(t,e,r){"use strict";r(37);var n,o=r(4),c=r(133),l=r(134),m=r(333),d={mixins:[l.a,m.a],props:{identity:String,email:String,type:String,mobile:String,isValidate:Boolean},data:function(){return{isSend:!1,countDown:0,timer:null,url:null,msg:null,sendData:null}},methods:{_getCode:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,code,data,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("email"==this.type?(this.msg="请先输入邮箱并确认身份",this.url=c.g,this.sendData={email:this.email,identity:this.identity}):(this.msg="请输入正确的手机号码",this.url=c.e,this.sendData={mobile:this.mobile,identity:this.identity}),this.isValidate&&this.identity){t.next=4;break}return this.alert(this.msg),t.abrupt("return");case 4:return this.isSend=!0,this.countDown=5,this.timer=setInterval((function(){if(r.countDown<1)return clearInterval(r.timer),void(r.isSend=!1);r.countDown--}),1e3),t.next=9,this.url(this.sendData);case 9:e=t.sent,code=e.code,data=e.data,e.status,e.message,0==code&&this.alert(data.msg,1==this.identity?"success":"warning");case 15:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}},f=r(2),component=Object(f.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("el-button",{attrs:{type:"primary",loading:this.isSend},on:{click:this._getCode}},[this._v("\n  "+this._s(this.isSend?this.countDown+" 秒后从新获取":"发送"+("email"==this.type?"邮箱":"手机")+"验证码")+"\n")])}),[],!1,null,"06bf4d22",null);e.a=component.exports},346:function(t,e,r){"use strict";var n=r(336);r.n(n).a},363:function(t,e,r){"use strict";r.r(e);r(28),r(15),r(11),r(8),r(24);var n=r(9),o=(r(38),r(37),r(4)),c=r(134),l=r(333),m=r(133),d=r(7),f=r(343);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var _={mixins:[c.a,l.a],layout:"user",head:{title:"用户注册"},transition:"fade",components:{getCode:f.a},data:function(){return{isSend:!1,emailValidator:!1,isLoading:!1,countDown:5,timer:null,form:{password:"123456",identity:"1",email:"hg9558@126.com",code:"",checkPassword:"123456"}}},methods:{_onSubmit:function(t){var e=this;this.$refs[t].validate(function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var n,o,code,data,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}return e.isLoading=!0,t.next=4,e._getPublicKey(e.form.password);case 4:return n=t.sent,t.next=7,Object(m.j)({password:n,identity:e.form.identity,email:e.form.email,code:e.form.code});case 7:o=t.sent,code=o.code,data=o.data,c=o.message,1===code?e.alert(c):(sessionStorage.token=data.token,e.$store.commit("user/saveUserInfo",data.user),"2"==e.UserInfo.identity?e.$router.replace("/forum/forumlist/all"):e.$router.replace("/user/usersetting/userMessage")),e.isLoading=!1,t.next=17;break;case 15:return e.alert("请正确填写表单内容"),t.abrupt("return",!1);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)("user",{UserInfo:function(t){return t.UserInfo}}))},v=(r(346),r(2)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-container"},[r("el-form",{ref:"form",staticClass:"w_380 pl_10 pr_10 b_s mt_30 user-form",attrs:{model:t.form,rules:t.rules}},[r("el-form-item",{staticClass:"mt_20 p_r",attrs:{prop:"email"}},[r("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-message",placeholder:"Email Address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),r("el-form-item",{staticClass:"mt_20 identity"},[r("label",{staticClass:"icon iconfont icon-banjiguanli1",attrs:{for:""}}),t._v(" "),r("el-select",{attrs:{placeholder:"Please select identity"},model:{value:t.form.identity,callback:function(e){t.$set(t.form,"identity",e)},expression:"form.identity"}},[r("el-option",{attrs:{label:"student",value:"1"}}),t._v(" "),r("el-option",{attrs:{label:"teacher",value:"2"}})],1)],1),t._v(" "),r("el-form-item",{staticClass:"mt_20",attrs:{prop:"code"}},[r("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-paperclip",placeholder:"Code"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),t._v(" "),r("get-code",{staticClass:"p_a p_r_0 p_t_1",attrs:{isValidate:t.emailValidator,identity:t.form.identity,email:t.form.email,type:"email"}})],1),t._v(" "),r("el-form-item",{staticClass:"mt_20",attrs:{prop:"password"}},[r("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Password",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),r("el-form-item",{staticClass:"mt_20",attrs:{prop:"checkPassword"}},[r("el-input",{staticClass:"c_f_c ft_16 confirm-password",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Confirm Password",type:"password"},model:{value:t.form.checkPassword,callback:function(e){t.$set(t.form,"checkPassword",e)},expression:"form.checkPassword"}})],1)],1),t._v(" "),r("div",{staticClass:"h_1 w_100p bgc_br mt_45 mb_20"}),t._v(" "),r("div",{staticClass:"action flex w_360"},[r("el-button",{staticClass:"bgc_b_b ft_14 w_100p",attrs:{type:"primary",loading:t.isLoading},on:{click:function(e){return t._onSubmit("form")}}},[t._v("Sign Up")])],1)],1)}),[],!1,null,"689a2741",null);e.default=component.exports}}]);