<template>
  <div class="rest-wrapper wp_100 h_80 bgc_h_c p_r">
    <div class="step-box w_1000 mg_0a">
      <el-steps :space="650" :active="1" finish-status="success" :align-center="true">
        <el-step title="填写邮箱"></el-step>
        <el-step title="重置密码"></el-step>
        <el-step title="成功"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  layout: "usersetting"
};
</script>

<style scoped lang="stylus">
.rest-wrapper
   .step-box
     absolute()
</style>