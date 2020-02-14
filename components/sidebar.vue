<template>
  <div class="aside-container">
    <el-menu :default-active="activeIndex"
             class="asside-container"
             :unique-opened="true"
             @open="handleClick"
             @close="handleClick"
             background-color="#1F262D"
             text-color="rgba(255,255,255,.6)"
             active-text-color="#ffb848"
             :collapse="isCollapse">
      <el-menu-item class="first">
        <i class="small-logo"></i>
        <img class="mt_5"
             src="/images/home/logo.png"
             slot="title">
        <span slot="title"></span>
      </el-menu-item>
      <el-submenu :index="`${index}`"
                  v-for="(item,index) in sidebarList.contentList"
                  :key="item.title"
                  :popper-class="!item.lists.length?'hide':''"
                  :class="{empty:!item.lists.length}">
        <template slot="title"
                  v-if="!item.lists.length">
          <nuxt-link :to="item.linkUrl"
                     tag="div">
            <i class="icon iconfont"
               :class="`${item.icon}`"></i>
            <span class="pl_5">{{item.title}}</span>
          </nuxt-link>
        </template>
        <template slot="title"
                  v-else>
          <i class="icon iconfont"
             :class="`${item.icon}`"></i>
          <span class="pl_5">{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="(section, sIndex) in item.lists"
                            :key="sIndex">
          <el-menu-item :index="`${index}-${sIndex}`">{{section.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () {
  },
  data () {
    return {
      activeIndex: '0'
    }
  },
  methods: {
    handleClick (index) {
      // if (this.sidebarList.contentList[index].lists.length) return
      // this.$router.push(this.sidebarList.contentList[index].linkUrl)
    }
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.home.isCollapse,
      sidebarList: (state) => state.home.sidebarList
    })
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
