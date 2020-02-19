<template>
  <div class="masker-container p_fix w_100p hp_100 z_999 p_l_0 pr_0 bgc_o5 p_t_0">
    <div class="masker-main w_420 bgc_f pd_10 pb_10 r_4 ft_18">
      <div class="title mb_20 c_s ft_b">温馨提示</div>
      <div class="content ft_16  mb_20 t_c">
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <span class="ft_14 c_6"> 恭喜您，密码修改成功，将在</span>
        <span class="c_s ft_14">0{{timer}}</span>
        <span class="ft_14 c_6"> 之后跳转登录页面</span>

      </div>
      <div class="t_r">
        <el-button type="primary" size="small" @click="$router.replace('/user/login')">马上登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.time = setInterval(() => {
      --this.timer
      if (this.timer == 0) {
        this.$router.replace('/user/login')
      }
    }, 1000);
  },
  data () {
    return {
      time: null,
      timer: 5
    }
  },
  destroyed () {
    clearInterval(this.time)
  }
}
</script>

<style scoped lang="stylus">
    .masker-main
      absolute()
      border: 1px solid #EBEEF5;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      overflow: hidden;
</style>
