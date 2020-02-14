exports.ids=[9],exports.modules={107:function(t,e){t.exports={}},108:function(t,e){t.exports={}},114:function(t,e,l){"use strict";l.r(e);var n=l(107),o=l.n(n);for(var r in n)"default"!==r&&function(t){l.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},115:function(t,e,l){"use strict";l.r(e);var n=l(108),o=l.n(n);for(var r in n)"default"!==r&&function(t){l.d(e,t,(function(){return n[t]}))}(r);e.default=o.a},123:function(t,e,l){"use strict";l.r(e);var n={data:()=>({activeNames:["0"],activeClass:"1",useNameLogin:!1,userForm:{name:""}}),methods:{handleChange(t){console.log(t)}}},o=l(1);var component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"account-container w_840"},[l("el-form",{attrs:{"label-position":"top","label-width":"80px",model:t.userForm}},[l("div",{staticClass:"title-container ft_24 c_6 ft_b mt_30 "},[t._v("\n      账户与安全\n    ")]),t._v(" "),l("el-collapse",{attrs:{accordion:!0},on:{change:function(e){return t.activeClass=e[0]}},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[l("el-collapse-item",{staticClass:"mt_30",attrs:{name:"1"}},[l("template",{slot:"title"},[l("el-form-item",{staticClass:"w_100p",attrs:{label:"登录用户名"}},[l("el-input",{class:{on:"1"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入用户名"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}})],1)],1),t._v(" "),l("div",{staticClass:"mt_15"},[l("div",{staticClass:"operate-container"},[l("el-switch",{attrs:{"active-text":"使用用户名作为登录凭证"},model:{value:t.useNameLogin,callback:function(e){t.useNameLogin=e},expression:"useNameLogin"}})],1),t._v(" "),l("div",{staticClass:"btn-group mt_20"},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),l("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2),t._v(" "),l("el-collapse-item",{staticClass:"mt_30",attrs:{name:"2"}},[l("template",{slot:"title"},[l("el-form-item",{staticClass:"w_100p",attrs:{label:"密码"}},[l("el-input",{class:{on:"2"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"当前密码",type:"password"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}})],1)],1),t._v(" "),l("div",{staticClass:"mt_15 "},[l("div",{staticClass:"operate-container"},[l("el-input",{attrs:{type:"password",placeholder:"新密码"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}}),t._v(" "),l("el-input",{attrs:{type:"password",placeholder:"确认新密码"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}})],1),t._v(" "),l("div",{staticClass:"btn-group mt_20"},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),l("el-button",{attrs:{size:"small"}},[t._v("取消")]),t._v(" "),l("nuxt-link",{staticClass:"c_tc f_x_e ml_15",attrs:{to:"/"}},[t._v("忘记密码")])],1)])],2),t._v(" "),l("el-collapse-item",{staticClass:"mt_30",attrs:{name:"3"}},[l("template",{slot:"title"},[l("el-form-item",{staticClass:"w_100p",attrs:{label:"显示昵称"}},[l("el-input",{class:{on:"3"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入用户名"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}})],1)],1),t._v(" "),l("div",{staticClass:"mt_15 "},[l("div",{staticClass:"btn-group mt_20"},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),l("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2),t._v(" "),l("el-collapse-item",{staticClass:"mt_30",attrs:{name:"4"}},[l("template",{slot:"title"},[l("el-form-item",{staticClass:"w_100p",attrs:{label:"邮箱"}},[l("el-input",{class:{on:"4"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入邮箱"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}})],1)],1),t._v(" "),l("div",{staticClass:"mt_15 "},[l("div",{staticClass:"operate-container"},[l("el-input",{attrs:{placeholder:"请输入获取到的验证码"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}},[l("template",{slot:"append"},[l("el-button",{attrs:{type:"primary"}},[t._v("主要按钮")])],1)],2)],1),t._v(" "),l("div",{staticClass:"btn-group mt_20"},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),l("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2),t._v(" "),l("el-collapse-item",{staticClass:"mt_30",attrs:{name:"5"}},[l("template",{slot:"title"},[l("el-form-item",{staticClass:"w_100p",attrs:{label:"手机"}},[l("el-input",{class:{on:"5"==t.activeClass},attrs:{"suffix-icon":"icon iconfont icon-write_fill",placeholder:"请输入手机号码"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}})],1)],1),t._v(" "),l("div",{staticClass:"mt_15 "},[l("div",{staticClass:"operate-container"},[l("el-input",{attrs:{placeholder:"请输入获取到的验证码"},model:{value:t.userForm.name,callback:function(e){t.$set(t.userForm,"name",e)},expression:"userForm.name"}},[l("template",{slot:"append"},[l("el-button",{attrs:{type:"primary"}},[t._v("主要按钮")])],1)],2)],1),t._v(" "),l("div",{staticClass:"btn-group mt_20"},[l("el-button",{attrs:{size:"small",type:"primary"}},[t._v("确定")]),t._v(" "),l("el-button",{attrs:{size:"small"}},[t._v("取消")])],1)])],2)],1)],1),t._ssrNode(' <div class="bottom-container ft_24 c_6 ft_b mt_50 " data-v-e0abf192>\n      其他\n    </div> <div class="cancel-group mt_30 ml_20 c_6 ft_18" data-v-e0abf192><h3 data-v-e0abf192>注销账户</h3> <span class="c_tc ft_16 f_x_e ml_30 c_r" data-v-e0abf192>注销</span></div>')],2)}),[],!1,(function(t){var e=l(114);e.__inject__&&e.__inject__(t);var n=l(115);n.__inject__&&n.__inject__(t)}),"e0abf192","5129f838");e.default=component.exports}};