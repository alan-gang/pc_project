<template>
  <div class="user-action-container">
    <el-menu ref="item"
             mode="horizontal"
             background-color="#141619"
             menu-trigger="click"
             active-text-color="#ffb848"
             :unique-opened="true"
             @open="openItem"
             text-color="rgba(255,255,255,.6)">
      <el-submenu index="1">
        <template slot="title">
          <el-badge class="item h_24 lh_24 "
                    :value="3">
            <i class="icon iconfont icon-lingdang ft_24 c_f"></i>
          </el-badge>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-chat-dot-square ft_24 c_f"></i>
        </template>
        <el-menu-item index="2-1">选项2-2</el-menu-item>
        <el-menu-item index="2-2">选项2-2</el-menu-item>
        <el-menu-item index="2-3">选项2-3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <el-avatar src="/images/home/user_bg.png"></el-avatar>
        </template>
        <el-menu-item :index="`3-${index}`"
                      v-for="(item, index) in userSettingList"
                      :key="index">
          <nuxt-link :to="item.linkUrl"
                     tag="div">
            <span class="icon iconfont mr_5"
                  :class="item.icon"></span>
            <span>{{item.title}}</span>
          </nuxt-link>
        </el-menu-item>
        <el-menu-item index="3-4"
                      @click="_signOut">
          <span class="icon iconfont icon-084tuichu mr_5"></span>
          <span>
            退出
          </span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { signOut } from '~/api'
import ruleMixin from '~/assets/mixin/userRuleMixin'

export default {
  mixins: [ruleMixin],
  data () {
    return {
      timer: null,
      userSettingList: [{
        "icon": "icon-shezhi_huaban",
        "title": "账户设置",
        "linkUrl": "/user/usersetting"
      }, {
        "icon": "icon-mingpian",
        "title": "个人资料",
        "linkUrl": "/user/usersetting/userMessage"
      }, {
        "icon": "icon-xuexiao",
        "title": "用户信息详情",
        "linkUrl": "/user/usersetting/userDetail"
      }]
    };
  },
  methods: {
    openItem (index) {
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (index !== '0') {
          this.$refs.item.close(index)
        }
      }, 5000)
    },
    async _signOut () {
      let { code, message } = await signOut()
      sessionStorage.removeItem('token')
      this.$router.replace('/user/login')
    }
  },
  beforeDestroy () {
    this.timer && clearTimeout(this.timer)
  }
}
</script>

<style scoped lang="stylus">
  .user-action-container
    >>>.el-submenu__title .el-submenu__icon-arrow
              display none
    >>>.el-submenu__title
              padding 0 13px
              border none !important
              .el-badge__content
                border none
</style>
