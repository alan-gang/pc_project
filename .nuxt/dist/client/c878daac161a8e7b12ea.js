(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(e,t,r){"use strict";var n={data:function(){var e=this;return{rules:{name:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"长度在 6 到 15个字符",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],email:[{validator:function(t,r,n){var o=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!r)return e.emailValidator=!1,n(new Error("邮箱不能为空"));setTimeout((function(){o.test(r)?(e.emailValidator=!0,n()):(e.emailValidator=!1,n(new Error("请输入正确的邮箱格式")))}),100)},trigger:"blur"}],checkPassword:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(t,r,n){r!==e.form.password?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}]}}},methods:{alert:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;this.$message({message:e,type:t,duration:r})},confirm:function(e,t,r){var n,o=5;setInterval((function(){--o,n="<div>哈哈哈".concat(o,"</div>")}),1e3),this.$confirm(n,"温馨提示",{confirmButtonText:"确定",cancelButtonText:"",dangerouslyUseHTMLString:!0,showClose:!1,closeOnClickModal:!1,distinguishCancelAndClose:!0,showCancelButton:r,type:t}).then((function(){}))}}};t.a=n},330:function(e,t,r){"use strict";r(57);var n,o,c=r(6);r(95);t.a={data:function(){return{publicKey:"-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIGs2dvgRPJl/zMLAUeZgLP2ouCvuXcg\n65LI3KsUDl40UwATyxaX2ZxgytcrGFk8KRwcRiexEhbRlytedqbKVsMCAwEAAQ==\n-----END PUBLIC KEY-----",privateKey:"-----BEGIN RSA PRIVATE KEY-----\nMIIBOQIBAAJBAIGs2dvgRPJl/zMLAUeZgLP2ouCvuXcg65LI3KsUDl40UwATyxaX\n2ZxgytcrGFk8KRwcRiexEhbRlytedqbKVsMCAwEAAQJAdg98Dc5il1o7fSpQ0PI1\nliM/aVczgP1M3MfY+Dz7U9H5zzFHX3zasyFTu505i4Ia75DEU3Ik5MNAJsajC7Li\nKQIhANTmbAIJK0H5VPqYMvNKIPKcFcNghQzM5O6WCBx/Rff3AiEAm+1JhWfMQIXo\nzcH7yn4QWg6EjpfUK/Es3sWgp8seHJUCIACtz3BeOR4XvnaiH595AAvmBYe++g2l\nZaGBJvt4SG/XAiA2h4IppEYa3nmu00MB6po/VEppL5GkmGAvu/9WDsOGDQIgJdXi\n+Bf8g9tQUSeiK6kGqKeZfbA49Qot3NWxA/VxGXI=\n-----END RSA PRIVATE KEY-----",jsencrypt:function(){return r.e(12).then(r.t.bind(null,335,7))}}},methods:{_getPublicKey:(o=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.jsencrypt();case 2:return r=e.sent,n=r.JSEncrypt,(o=new n).setPublicKey(this.publicKey),e.abrupt("return",o.encrypt(t));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)}),_parsingKey:(n=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.jsencrypt();case 2:return r=e.sent,n=r.JSEncrypt,(o=new n).setPrivateKey(this.privateKey),e.abrupt("return",o.decrypt(t));case 7:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})}}},332:function(e,t,r){},338:function(e,t,r){"use strict";var n=r(332);r.n(n).a},346:function(e,t,r){"use strict";r.r(t);r(58),r(21),r(18),r(11),r(44),r(96);var n=r(25),o=(r(57),r(6)),c=r(328),l=r(330),f=r(95);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h,v={mixins:[c.a,l.a],layout:"user",data:function(){return{isSend:!1,emailValidator:!1,countDown:5,timer:null,form:{password:"123456",identity:"1",email:"hg9558@126.com",code:"",checkPassword:"123456"}}},methods:{_onSubmit:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(r){var n,code,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=20;break}return e.next=3,t._getPublicKey(t.form.password);case 3:return t.form.password=e.sent,delete t.form.checkPassword,e.next=7,Object(f.f)(d({},t.form));case 7:if(n=e.sent,code=n.code,data=n.data,o=n.message,1!==code){e.next=16;break}return t.alert(o),e.abrupt("return");case 16:localStorage.token=data.token,t.$router.replace("/");case 18:e.next=22;break;case 20:return t.alert("请正确填写表单内容"),e.abrupt("return",!1);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},_getCode:(h=Object(o.a)(regeneratorRuntime.mark((function e(){var t,code,data,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.emailValidator&&this.form.identity){e.next=3;break}return this.alert("请先输入邮箱并确认身份"),e.abrupt("return");case 3:return this.isSend=!0,this.countDown=5,this.timer=setInterval((function(){if(r.countDown<1)return clearInterval(r.timer),void(r.isSend=!1);r.countDown--}),1e3),e.next=8,Object(f.c)({email:this.form.email,identity:this.form.identity});case 8:t=e.sent,code=t.code,data=t.data,0===code&&this.alert(data.msg,1==this.form.identity?"success":"warning");case 12:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})}},w=(r(338),r(2)),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-form",{ref:"form",staticClass:"w_380 pl_10 pr_10 b_s mt_30 user-form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{staticClass:"mt_20 p_r",attrs:{prop:"email"}},[r("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-message",placeholder:"Email Address"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("el-form-item",{staticClass:"mt_20 identity"},[r("label",{staticClass:"icon iconfont icon-banjiguanli1",attrs:{for:""}}),e._v(" "),r("el-select",{attrs:{placeholder:"Please select identity"},model:{value:e.form.identity,callback:function(t){e.$set(e.form,"identity",t)},expression:"form.identity"}},[r("el-option",{attrs:{label:"student",value:"1"}}),e._v(" "),r("el-option",{attrs:{label:"teacher",value:"2"}})],1)],1),e._v(" "),r("el-form-item",{staticClass:"mt_20",attrs:{prop:"code"}},[r("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-paperclip",placeholder:"Code"},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}}),e._v(" "),r("el-button",{staticClass:"p_a p_r_0 p_t_1",attrs:{type:"primary",loading:e.isSend},on:{click:e._getCode}},[e._v("\n        "+e._s(e.isSend?this.countDown+" 秒后从新获取":"发送验证码")+"\n      ")])],1),e._v(" "),r("el-form-item",{staticClass:"mt_20",attrs:{prop:"password"}},[r("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Password",type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),e._v(" "),r("el-form-item",{staticClass:"mt_20",attrs:{prop:"checkPassword"}},[r("el-input",{staticClass:"c_f_c ft_16 confirm-password",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Confirm Password",type:"password"},model:{value:e.form.checkPassword,callback:function(t){e.$set(e.form,"checkPassword",t)},expression:"form.checkPassword"}})],1)],1),e._v(" "),r("div",{staticClass:"h_1 w_100p bgc_br mt_45 mb_20"}),e._v(" "),r("div",{staticClass:"action flex w_360"},[r("div",{staticClass:"w_360 h_45 bgc_b_b t_c lh_45 c_f ft_14 r_5 c_r",on:{click:function(t){return e._onSubmit("form")}}},[e._v("Sign Up")])])],1)}),[],!1,null,"79edaf32",null);t.default=component.exports}}]);