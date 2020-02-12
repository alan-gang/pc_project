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
        <el-menu-item index="3-1">
          <span>
            账户设置
          </span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <span>
            个人资料
          </span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <span>
            头像设置
          </span>
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
import { signOut } from '~/plugins/api'
import ruleMixin from '~/assets/mixin/userRuleMixin'

export default {
  mixins: [ruleMixin],
  data () {
    return {
      timer: null
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
      location.reload()
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
