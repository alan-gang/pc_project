(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{360:function(e,t,r){"use strict";r.r(t);r(47),r(21),r(14),r(8),r(34);var n=r(19),c=(r(45),r(6)),o=r(133),f=r(20);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var l,d={fetch:(l=Object(c.a)(regeneratorRuntime.mark((function e(t){var r,n,c,f,O,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.$axios,e.next=3,Object(o.d)(n,{title:"userSetting"});case 3:c=e.sent,f=c.sidebarList,r.commit("home/fillSidebar",f),e.next=12;break;case 9:O=e.sent,l=O.user,r.commit("user/saveUserInfo",l);case 12:case"end":return e.stop()}}),e)}))),function(e){return l.apply(this,arguments)}),watch:{},data:function(){return{msg:""}},methods:{},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(f.c)({sidebarList:function(e){return e.home.sidebarList}}))},m=r(2),component=Object(m.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("transition",{attrs:{name:"el-fade-in",mode:"out-in"}},[t("nuxt-child")],1)],1)}),[],!1,null,"465f0302",null);t.default=component.exports}}]);