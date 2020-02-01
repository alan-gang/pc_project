<template>
  <div class="setting-wrapper">
    <el-page-header class="h_60 bgc_u_b c_f lh_60" @back="goBack" content="重置密码"></el-page-header>
    <nuxt></nuxt>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log("go back");
    }
  }
};
</script>

<style scoped lang="stylus">

.setting-wrapper
   >>>.el-page-header__content
       color #fff
</style>