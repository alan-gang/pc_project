(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{361:function(e,t,r){"use strict";r.r(t);r(46),r(21),r(14),r(8),r(34);var n=r(19),c=(r(61),r(98),r(45),r(6)),o=r(133),f=r(20);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var d,m,O={fetch:(m=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,c,f,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.$axios,e.next=3,Object(o.b)(n,{title:"userSetting"});case 3:c=e.sent,f=c.sidebarList,r.commit("home/fillSidebar",f),e.next=12;break;case 9:l=e.sent,d=l.user,r.commit("user/saveUserInfo",d);case 12:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)}),watch:{$route:(d=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.path.includes("usersetting")||"userSetting"==this.sidebarList.title){e.next=6;break}return e.next=3,Object(o.b)($axios,{title:"userSetting"});case 3:r=e.sent,n=r.data.sidebarList,store.commit("home/fillSidebar",n);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},data:function(){return{msg:""}},methods:{},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(f.c)({sidebarList:function(e){return e.home.sidebarList}}))},h=r(2),component=Object(h.a)(O,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"el-fade-in",mode:"out-in"}},[t("nuxt-child")],1)],1)}),[],!1,null,"7db02cec",null);t.default=component.exports}}]);