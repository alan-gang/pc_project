<template>
  <el-container class="main-container">
    <m-sidebar></m-sidebar>
    <div class="content-container">
      <m-header></m-header>
      <el-main>
        <nuxt />
      </el-main>
    </div>
  </el-container>
</template>

<script>

import mHeader from '~/components/header'
import mSidebar from '~/components/sidebar'
export default {
  components: {
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
    .content-container
      width 100%
    .el-main
      overflow hidden
</style>
