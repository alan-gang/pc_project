<template>
  <el-container class="main-container">
    <m-sidebar></m-sidebar>
    <el-container>
      <m-header></m-header>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import mHeader from '~/components/header'
import mSidebar from '~/components/sidebar'
export default {
  components:{
    mHeader,
    mSidebar
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
  .main-container
    height 100%
    display flex
    .el-main
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
</style>
