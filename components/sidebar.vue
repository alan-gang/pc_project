<template>
  <div class="aside-container">
    <el-menu class="asside-container" default-active="3" ref="menu" :unique-opened="true" @open="handleClick" background-color="#1F262D" text-color="rgba(255,255,255,.6)" active-text-color="#909399" :collapse="isCollapse">
      <el-menu-item class="first">
        <i class="small-logo"></i>
        <img class="mt_5" src="/images/home/logo.png" slot="title">
        <span slot="title"></span>
      </el-menu-item>
      <el-submenu :index="`${index}`" v-for="(item,index) in sidebarList" :key="item.title" :popper-class="!item.lists.length?'hide':''" :class="{empty:!item.lists.length}">
        <template slot="title" v-if="!item.lists.length">
          <nuxt-link :to="item.linkUrl" tag="div">
            <i class="icon iconfont" :class="`${item.icon}`"></i>
            <span class="pl_5">{{item.title}}</span>
          </nuxt-link>
        </template>
        <template slot="title" v-else>
          <i class="icon iconfont" :class="`${item.icon}`"></i>
          <span class="pl_5">{{item.title}}</span>
        </template>
        <el-menu-item v-for="(section, sIndex) in item.lists" :key="index+sIndex">
          <nuxt-link :to="section.linkUrl" tag="div">
            <i class="icon iconfont icon-anli"></i>
            <span class="pl_5">{{section.title}}</span>
          </nuxt-link>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted () {
    this.$refs.menu.open(this.activeIndex)
  },
  data () {
    return {
    }
  },
  watch: {
    $route (newRoute, oldRoute) {
      if (newRoute.name.substr(0, newRoute.name.indexOf('-')) !== oldRoute.name.substr(0, oldRoute.name.indexOf('-'))) {
        this.$refs.menu.open('0')
      }
    }
  },
  methods: {
    handleClick (index) {
    },
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.home.isCollapse,
      userInfo: (state) => state.user.UserInfo
    }),
    sidebarList () {
      let arr = JSON.parse(JSON.stringify(this.$store.state.home.sidebarList.contentList))
      if (!this.userInfo.username) {
        let t = arr.splice(0, 1)
        arr.splice(1, 0, ...t)
      }
      return arr
    },
    activeIndex () {
      let r = 0;
      for (const [index, item] of this.sidebarList.entries()) {
        if (item.linkUrl && (item.linkUrl === this.$route.path)) {
          r = index
          break
        } else {
          for (const childItme of item.lists) {
            if (childItme.linkUrl === this.$route.path) {
              r = index
              break
            }
          }
        }
      }
      return r
    }
  }
}
</script>

  <style>
.asside-container:not(.el-menu--collapse) {
  width: 240px;
}

.el-menu-item {
  display: flex;
  align-items: center;
}
.el-menu-item:hover {
  color: #fff !important;
}
</style>

<style scoped lang="stylus">
    .asside-container
      height 100%
      line-height 1
      border-color transparent !important
      >>>
        .el-submenu__title:hover *,.el-menu-item:hover
          color #fff !important
        .el-menu-item.first
          flex(flex-start)
          .small-logo
            width 30px
            display inline-block
            height 100%
            background (url('/images/home/logo-icon.png') center no-repeat)
        .empty
          .el-submenu__icon-arrow
            display none
       .on
        color #e6a23c
        & *
          color #e6a23c
</style>
<style lang="stylus">
    .hide,.hide *
      background-color transparent
</style>
