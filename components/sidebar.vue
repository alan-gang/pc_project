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
        <img src="~/assets/images/home/logo.png"
             slot="title"
             alt="">
        <span slot="title"></span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-2">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="2-2">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="3-2">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="4-2">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false,
      activeIndex: '0'
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    }
  }
}
</script>

<style scoped lang="stylus">
    .asside-container
      height 100%
      line-height 1
      >>>
        .el-submenu__title:hover *,.el-menu-item:hover
          color #fff !important
      .el-menu-item.first
        flex(flex-start)
        .small-logo
          width 30px
          display inline-block
          height 100%
          background (url('~@/assets/images/home/logo-icon.png') center no-repeat)
</style>
