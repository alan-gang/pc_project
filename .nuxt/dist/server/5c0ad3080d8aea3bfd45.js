exports.ids=[8],exports.modules={109:function(e,t){e.exports={}},119:function(e,t,r){"use strict";r.r(t);var d=r(109),_=r.n(d);for(var v in d)"default"!==v&&function(e){r.d(t,e,(function(){return d[e]}))}(v);t.default=_.a},129:function(e,t,r){"use strict";r.r(t);var d={data:()=>({percentage:0,timer:null,show:!0}),created(){this.timer=setInterval(()=>{if(100==this.percentage)return this.show=!1,void clearInterval(this.timer);this.percentage+=1},100)}},_=r(1);var component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._ssrNode("<div data-v-9d4239b8>","</div>",[r("el-button",{attrs:{type:"success"}},[e._v("上传头像图片")]),e._ssrNode(" <span data-v-9d4239b8>(支持文件拖放上传，只能上传单张10M以下png、jpg、gif图片)</span>")],2),e._ssrNode(" "),e._ssrNode('<div class="flex mt_20 flex-jc-s a_e" data-v-9d4239b8>',"</div>",[e._ssrNode('<div class="show-avatar mr_20 p_r" data-v-9d4239b8>',"</div>",[r("el-avatar",{attrs:{src:"/images/home/avatar_setting_small.png",shape:"square",size:400}}),e._ssrNode(" "),e.show?e._ssrNode('<div class="progress w_400 h_400 bgc_f o_50" data-v-9d4239b8>',"</div>",[r("el-progress",{staticClass:"progress",attrs:{type:"circle",percentage:e.percentage}})],1):e._e()],2),e._ssrNode(" "),e._ssrNode('<div class="flex f-d-c a_s" data-v-9d4239b8>',"</div>",[e._ssrNode("<div data-v-9d4239b8>","</div>",[e._ssrNode('<p class="mb_10" data-v-9d4239b8>当前头像</p> <p class="mb_10" data-v-9d4239b8>48px * 48px</p> '),e._ssrNode('<div class="p_r" data-v-9d4239b8>',"</div>",[r("el-avatar",{staticClass:"p_a",attrs:{src:"/images/home/update_avatar.jpg",shape:"square",size:48}}),e._ssrNode(' <input type="file" class="w_48 h_48 h_o z_10" data-v-9d4239b8>')],2)],2),e._ssrNode(" "),e._ssrNode('<div class="mt_20" data-v-9d4239b8>',"</div>",[e._ssrNode('<p class="mb_10" data-v-9d4239b8>180px * 180px</p> '),e._ssrNode('<div class="p_r" data-v-9d4239b8>',"</div>",[r("el-avatar",{staticClass:"p_a",attrs:{src:"/images/home/update_avatar.jpg",shape:"square",size:180}}),e._ssrNode(' <input type="file" class="w_180 h_180 h_o z_10" data-v-9d4239b8>')],2)],2)],2)],2)],2)}),[],!1,(function(e){var t=r(119);t.__inject__&&t.__inject__(e)}),"9d4239b8","75434973");t.default=component.exports}};