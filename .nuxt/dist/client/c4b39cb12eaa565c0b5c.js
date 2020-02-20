(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{338:function(t,e,o){},339:function(t,e,o){},349:function(t,e,o){"use strict";var l=o(338);o.n(l).a},350:function(t,e,o){"use strict";var l=o(339);o.n(l).a},355:function(t,e,o){"use strict";o.r(e);o(45);var l,n=o(6),r=(o(20),o(134)),c=o(133),m=o(43),f=function(t){var data=localStorage[t]&&JSON.parse(localStorage[t]);return data||!1},v={mixins:[r.a],mounted:function(){var t=this;this.$nextTick((function(){t.useNameLogin=f("user").hasOwnProperty("accountName")}))},data:function(){return{activeNames:"0",activeClass:"1",isDisabled:!1,useNameLogin:!1,UserInfo:JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),isLinkHome:!0}},methods:{_updateUser:(l=Object(n.a)(regeneratorRuntime.mark((function t(e,data){var o,l,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("success"!=this.$refs[e].validateState){t.next=14;break}return data.accountName&&this.isSaveUserName(),t.next=4,Object(c.j)(data);case 4:o=t.sent,l=o.data,n=l.msg,r=l.user,this.activeNames="0",this.isDisabled=!1,this.$store.commit("user/saveUserInfo",r),this.alert(n,"success"),t.next=15;break;case 14:this.alert(this.$refs[e].validateMessage);case 15:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)}),isSaveUserName:function(){var t,e,o={accountName:this.UserInfo.accountName,email:this.UserInfo.email,password:this.UserInfo.password},l=f("user");l&&l.hasOwnProperty("accountName")&&!this.useNameLogin&&delete o.accountName,t="user",e=o,"object"==Object(m.a)(e)?localStorage[t]=JSON.stringify(e):localStorage[t]=e}},computed:{showErrorMessage:function(){return"0"!==this.activeNames}}},d=(o(349),o(350),o(2)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"account-container w_840"},[o("el-form",{ref:"UserInfo",attrs:{"label-position":"top","label-width":"80px",model:t.UserInfo,"show-message":t.showErrorMessage,rules:t.rules}},[o("div",{staticClass:"title-container ft_24 c_6 ft_b mt_30 "},[t._v("账户与安全")]),t._v(" "),o("el-collapse",{attrs:{accordion:!0},on:{change:function(e){return t.activeClass=e[0]}},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[o("el-collapse-item",{staticClass:"mt_30",attrs:{name:"1"}},[o("template",{slot:"title"},[o("el-form-item",{ref:"accountName",staticClass:"w_100p",attrs:{prop:"accountName",label:"登录用户名"}},[o("el-input",{class:{on:"1"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入用户名"},on:{input:function(e){t.isDisabled=!0}},model:{value:t.UserInfo.accountName,callback:function(e){t.$set(t.UserInfo,"accountName",e)},expression:"UserInfo.accountName"}})],1)],1),t._v(" "),o("div",{staticClass:"mt_25"},[o("div",{staticClass:"operate-container"},[o("el-switch",{attrs:{"active-text":"使用用户名作为登录凭证"},model:{value:t.useNameLogin,callback:function(e){t.useNameLogin=e},expression:"useNameLogin"}})],1),t._v(" "),o("div",{staticClass:"btn-group mt_20"},[o("el-button",{attrs:{size:"small",type:"primary",disabled:1==t.activeNames&&!t.isDisabled},on:{click:function(e){return t._updateUser("accountName",{accountName:t.UserInfo.accountName})}}},[t._v("确定")]),t._v(" "),o("el-button",{attrs:{size:"small"},on:{click:function(e){t.activeNames="0"}}},[t._v("取消")])],1)])],2),t._v(" "),o("el-collapse-item",{staticClass:"mt_30",attrs:{name:"2"}},[o("template",{slot:"title"},[o("el-form-item",{staticClass:"w_100p",attrs:{prop:"oldPassword",label:"密码"}},[o("el-input",{class:{on:"2"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"当前密码",type:"password"},model:{value:t.UserInfo.oldPassword,callback:function(e){t.$set(t.UserInfo,"oldPassword",e)},expression:"UserInfo.oldPassword"}})],1)],1),t._v(" "),o("div",{staticClass:"mt_25 "},[o("div",{staticClass:"operate-container"},[o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:t.UserInfo.newPassword,callback:function(e){t.$set(t.UserInfo,"newPassword",e)},expression:"UserInfo.newPassword"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"checkPassword"}},[o("el-input",{attrs:{type:"password",placeholder:"确认新密码"},model:{value:t.UserInfo.checkPassword,callback:function(e){t.$set(t.UserInfo,"checkPassword",e)},expression:"UserInfo.checkPassword"}})],1)],1),t._v(" "),o("div",{staticClass:"btn-group mt_20"},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),o("el-button",{attrs:{size:"small"}},[t._v("取消")]),t._v(" "),o("nuxt-link",{staticClass:"c_tc f_x_e ml_15",attrs:{to:"/"}},[t._v("忘记密码")])],1)])],2),t._v(" "),o("el-collapse-item",{staticClass:"mt_30",attrs:{name:"3"}},[o("template",{slot:"title"},[o("el-form-item",{staticClass:"w_100p",attrs:{label:"显示昵称",prop:"accountName"}},[o("el-input",{class:{on:"3"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入用户昵称"},model:{value:t.UserInfo.nickName,callback:function(e){t.$set(t.UserInfo,"nickName",e)},expression:"UserInfo.nickName"}})],1)],1),t._v(" "),o("div",{staticClass:"mt_15 "},[o("div",{staticClass:"btn-group mt_20"},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),o("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2),t._v(" "),o("el-collapse-item",{staticClass:"mt_30",attrs:{name:"4"}},[o("template",{slot:"title"},[o("el-form-item",{staticClass:"w_100p",attrs:{label:"邮箱",prop:"name"}},[o("el-input",{class:{on:"4"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入邮箱"},model:{value:t.UserInfo.email,callback:function(e){t.$set(t.UserInfo,"email",e)},expression:"UserInfo.email"}})],1)],1),t._v(" "),o("div",{staticClass:"mt_25 "},[o("div",{staticClass:"operate-container"},[o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{attrs:{placeholder:"请输入获取到的验证码"},model:{value:t.UserInfo.code,callback:function(e){t.$set(t.UserInfo,"code",e)},expression:"UserInfo.code"}},[o("template",{slot:"append"},[o("el-button",{attrs:{type:"primary"}},[t._v("主要按钮")])],1)],2)],1)],1),t._v(" "),o("div",{staticClass:"btn-group mt_20"},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),o("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2),t._v(" "),o("el-collapse-item",{staticClass:"mt_30",attrs:{name:"5"}},[o("template",{slot:"title"},[o("el-form-item",{staticClass:"w_100p",attrs:{label:"手机",prop:"mobile"}},[o("el-input",{class:{on:"5"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入手机号码"},model:{value:t.UserInfo.mobile,callback:function(e){t.$set(t.UserInfo,"mobile",e)},expression:"UserInfo.mobile"}})],1)],1),t._v(" "),o("div",{staticClass:"mt_15 "},[o("div",{staticClass:"operate-container"},[o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{attrs:{placeholder:"请输入获取到的验证码"},model:{value:t.UserInfo.mobileCode,callback:function(e){t.$set(t.UserInfo,"mobileCode",e)},expression:"UserInfo.mobileCode"}},[o("template",{slot:"append"},[o("el-button",{attrs:{type:"primary"}},[t._v("主要按钮")])],1)],2)],1)],1),t._v(" "),o("div",{staticClass:"btn-group mt_20"},[o("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),o("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2)],1)],1),t._v(" "),o("div",{staticClass:"bottom-container ft_24 c_6 ft_b mt_50 "},[t._v("\n    其他\n  ")]),t._v(" "),o("div",{staticClass:"cancel-group mt_30 ml_20 c_6 ft_18"},[o("el-button",{attrs:{type:"primary",disabled:t.isLinkHome}},[t._v("跳转首页")]),t._v(" "),o("el-button",{attrs:{type:"danger"}},[t._v("注销账户")])],1)],1)}),[],!1,null,"3593aae6",null);e.default=component.exports}}]);