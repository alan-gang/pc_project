<template>
  <div class="login-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="w_380 pl_10 pr_10 b_s mt_30 user-form">
      <el-form-item prop="name">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-user"
          v-model="ruleForm.name"
          placeholder="Enter email login"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt_20" prop="password">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-edit"
          v-model="ruleForm.password"
          placeholder="Password"
          type="password"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="h_1 w_100p bgc_br mt_45 mb_20"></div>
    <div class="action flex w_360">
      <div class="w_145 h_35 bgc_b_b t_c lh_35 c_f ft_12 r_5">Lost password?</div>
      <div class="bgc_b_g w_60 h_35 t_c c_f r_5 lh_35 ft_12 cr" @click="onSubmit('ruleForm')">Login</div>
    </div>
  </div>
</template>
<script>
import rulesMixin from "~/assets/js/userRuleMixin.js"
import {  loginUser } from '~/plugins/api'

export default {
  mixins:[rulesMixin],
  layout: "user",
  data() {
    return {
      ruleForm: {
        name: "hg9558@126.com",
        password:"123456"
      }
    };
  },
  methods: {
    onSubmit(formName) {
     this.$refs[formName].validate(async (valid) => {
          if (valid) {
           let {code,data,message} = await loginUser({...this.ruleForm})
           if(code==1) {
                this.alert(message);
                return;
           }else {
               //重定向
              let token = data.token;
              localStorage.token=token;
               this.$router.push("/")
           }
          } else {
           this.alert('请正确填写用户名和密码');
           return false;
          }
        });
    }
  }
};
</script>

<style scoped lang="stylus">
@import "../../assets/css/user/user.styl"
    .login-container
      flex(,column)
</style>
