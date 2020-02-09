<template>
  <div class="user-action-container">
    <el-menu class="el-menu-demo"
             mode="horizontal"
             background-color="#141619"
             menu-trigger="click"
             active-text-color="#fff"
             text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <el-badge class="item h_24 lh_24 "
                    :value="3">
            <i class="icon iconfont icon-lingdang ft_24 c_f"></i>
          </el-badge>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-chat-dot-square ft_24 c_f"></i>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    // handleSelect (key, keyPath) {
    //   console.log(key, keyPath);
    // }
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
