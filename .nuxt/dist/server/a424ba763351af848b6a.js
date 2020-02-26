exports.ids=[5],exports.modules={100:function(t,e,o){"use strict";e.a={data:()=>({}),methods:{alert(t,e="warning",o=2e3){this.$message({message:t,type:e,duration:o})},confirm(t,e="warning",o){this.$alert(t,"温馨提示",{confirmButtonText:"确定",type:e,callback:o})},prompt(t,e){this.$confirm(t,"警告",{confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:"warning"}).then(e).catch(()=>{this.$message({type:"success",message:"您是对的，三思而后行",duration:1e3})})}}}},103:function(t,e){t.exports={}},111:function(t,e,o){"use strict";var r=o(36),n=o(37),l=o(100),c={mixins:[n.a,l.a],props:{identity:String,email:String,type:String,mobile:String,isValidate:Boolean},data:()=>({isSend:!1,countDown:0,timer:null,url:null,msg:null,sendData:null}),methods:{async _getCode(){if("email"==this.type?(this.msg="请先输入邮箱并确认身份",this.url=r.g,this.sendData={email:this.email,identity:this.identity}):(this.msg="请输入正确的手机号码",this.url=r.e,this.sendData={mobile:this.mobile,identity:this.identity}),!this.isValidate||!this.identity)return void this.alert(this.msg);this.isSend=!0,this.countDown=5,this.timer=setInterval(()=>{if(this.countDown<1)return clearInterval(this.timer),void(this.isSend=!1);this.countDown--},1e3);let{code:code,data:data,status:t,message:e}=await this.url(this.sendData);0==code&&this.alert(data.msg,1==this.identity?"success":"warning")}}},d=o(1);var component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("el-button",{attrs:{type:"primary",loading:this.isSend},on:{click:this._getCode}},[this._v("\n  "+this._s(this.isSend?this.countDown+" 秒后从新获取":"发送"+("email"==this.type?"邮箱":"手机")+"验证码")+"\n")])}),[],!1,(function(t){}),"06bf4d22","1cdfa99c");e.a=component.exports},114:function(t,e,o){"use strict";o.r(e);var r=o(103),n=o.n(r);for(var l in r)"default"!==l&&function(t){o.d(e,t,(function(){return r[t]}))}(l);e.default=n.a},129:function(t,e,o){"use strict";o.r(e);var r=o(37),n=o(100),l=o(36),c=o(111),d={mixins:[r.a,n.a],layout:"user",head:{title:"用户注册"},transition:"fade",components:{getCode:c.a},data:()=>({isSend:!1,emailValidator:!1,isLoading:!1,countDown:5,timer:null,form:{password:"123456",identity:"1",email:"hg9558@126.com",code:"",checkPassword:"123456"}}),methods:{_onSubmit(t){this.$refs[t].validate(async t=>{if(!t)return this.alert("请正确填写表单内容"),!1;{this.isLoading=!0;let t=await this._getPublicKey(this.form.password),{code:code,data:data,message:e}=await Object(l.j)({password:t,identity:this.form.identity,email:this.form.email,code:this.form.code});1===code?this.alert(e):(sessionStorage.token=data.token,this.$store.commit("user/saveUserInfo",data.user),this.$router.replace("/user/usersetting/userMessage")),this.isLoading=!1}})}}},m=o(1);var component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"form",staticClass:"w_380 pl_10 pr_10 b_s mt_30 user-form",attrs:{model:t.form,rules:t.rules}},[o("el-form-item",{staticClass:"mt_20 p_r",attrs:{prop:"email"}},[o("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-message",placeholder:"Email Address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("el-form-item",{staticClass:"mt_20 identity"},[o("label",{staticClass:"icon iconfont icon-banjiguanli1",attrs:{for:""}}),t._v(" "),o("el-select",{attrs:{placeholder:"Please select identity"},model:{value:t.form.identity,callback:function(e){t.$set(t.form,"identity",e)},expression:"form.identity"}},[o("el-option",{attrs:{label:"student",value:"1"}}),t._v(" "),o("el-option",{attrs:{label:"teacher",value:"2"}})],1)],1),t._v(" "),o("el-form-item",{staticClass:"mt_20",attrs:{prop:"code"}},[o("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-paperclip",placeholder:"Code"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),t._v(" "),o("get-code",{staticClass:"p_a p_r_0 p_t_1",attrs:{isValidate:t.emailValidator,identity:t.form.identity,email:t.form.email,type:"email"}})],1),t._v(" "),o("el-form-item",{staticClass:"mt_20",attrs:{prop:"password"}},[o("el-input",{staticClass:"c_f_c ft_16",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Password",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),o("el-form-item",{staticClass:"mt_20",attrs:{prop:"checkPassword"}},[o("el-input",{staticClass:"c_f_c ft_16 confirm-password",attrs:{"prefix-icon":"el-icon-edit",placeholder:"Confirm Password",type:"password"},model:{value:t.form.checkPassword,callback:function(e){t.$set(t.form,"checkPassword",e)},expression:"form.checkPassword"}})],1)],1),t._ssrNode(' <div class="h_1 w_100p bgc_br mt_45 mb_20" data-v-d7974844></div> '),t._ssrNode('<div class="action flex w_360" data-v-d7974844>',"</div>",[o("el-button",{staticClass:"bgc_b_b ft_14 w_100p",attrs:{type:"primary",loading:t.isLoading},on:{click:function(e){return t._onSubmit("form")}}},[t._v("Sign Up")])],1)],2)}),[],!1,(function(t){var e=o(114);e.__inject__&&e.__inject__(t)}),"d7974844","33c61554");e.default=component.exports}};