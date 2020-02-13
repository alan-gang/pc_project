<template>
  <div class="aside-container">
    <el-menu :default-active="activeIndex"
             class="asside-container"
             :unique-opened="true"
             @open="handleOpen"
             @close="handleClose"
             background-color="#1F262D"
             text-color="rgba(255,255,255,.6)"
             active-text-color="#ffb848"
             :collapse="isCollapse">
      <el-menu-item class="first">
        <i class="small-logo"></i>
        <img class="mt_5"
             src="/images/home/logo.png"
             slot="title"
             alt="">
        <span slot="title"></span>
      </el-menu-item>
      <el-submenu :index="`${index}`"
                  v-for="(item,index) in sidebarList.contentList"
                  :key="item.title"
                  :class="{empty:!item.lists.length}">
        <template slot="title">
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
    handleOpen () {

    },
    handleClose () {

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
</style>
