<template>
  <el-container class="main-container">
    <el-aside  width="200px">
      <el-menu default-active="1"
               class="asside-container"
               @open="handleOpen"
               @close="handleClose"
               :collapse="isCollapse">
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
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  data () {
    return {
      isCollapse: false
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
  .main-container
    height 100%
    display flex
    .el-header
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    .el-aside
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    .asside-container
      height 100%
      line-height 1
      background-color orange
    .el-main
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
</style>
