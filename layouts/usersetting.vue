<template>
  <div class="setting-wrapper">
    <div class="h_60 bgc_u_b c_f lh_60 setting-container b_x pl_10 pr_30">
      <img src="../assets/images/user/logo.png"
           alt="">
      <div class="action-right">
        <el-button type="primary"
                   size="mini"
                   @click="$router.push('/user/login')">登录</el-button>
        <el-button type="success"
                   size="mini"
                   @click="$router.push('/user/register')">注册</el-button>
      </div>
    </div>
    <nuxt></nuxt>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
    }
  }
};
</script>

<style scoped lang="stylus">

.setting-wrapper
  .setting-container
    flex()
</style>
