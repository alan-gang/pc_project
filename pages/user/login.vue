<template>
<div class="login-container">
  <el-form ref="form user-form"
           :model="form"
           class="w_380 pl_10 pr_10 b_s mt_30"
           >
    <el-form-item>
      <el-input
      class="c_f_c ft_16"
      prefix-icon="el-icon-user"
       v-model="form.name" placeholder="Username"></el-input>
    </el-form-item>
    <el-form-item class="mt_20">
      <el-input
      class="c_f_c ft_16"
      prefix-icon="el-icon-edit"
       v-model="form.name" placeholder="Password"></el-input>
    </el-form-item>
  </el-form>
  <div class="bgc_br h_1 mt_45 mb_20"></div>
  <div class="action">
    <div>忘记密码</div>
    <div>登陆用户</div>
  </div>
</div>
</template>
<script>
export default {
  layout:'user',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    }
  }
}
</script>

<style scoped lang="stylus">
    .login-container
      flex(,column)
</style>

<style scoped lang="stylus">
    .user-form
    >>>.el-input__inner
                text-indent 10px
    >>>.el-input__prefix
              top 1px
              left 0
              border-top-left-radius 4px
              border-bottom-left-radius 4px
              overflow hidden
              .el-input__icon.el-icon-user,.el-input__icon.el-icon-edit
                background-color #28b779
                top 1px
                color #fff
                padding: 0 5px;
                font-size: 18px;
              .el-icon-edit
                background-color #ffb848!important
</style>
