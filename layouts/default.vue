<template>
  <el-container v-loading="loadingMasker" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.5)" class="main-container">
    <m-sidebar></m-sidebar>
    <div class="content-container">
      <m-header></m-header>
      <nav-header v-if="isShowNavHeader"></nav-header>
      <el-main>
        <nuxt />
      </el-main>
    </div>
  </el-container>
</template>

<script>

import mHeader from '~/components/header'
import mSidebar from '~/components/sidebar'
import navHeader from '~/components/navHeader'

import { mapState } from 'vuex'
export default {
  components: {
    mHeader,
    mSidebar,
    navHeader
  },
  data () {
    return {
      isShowNavHeader: true
    }
  },
  methods: {

  },
  computed: {
    ...mapState(['loadingMasker'])
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
