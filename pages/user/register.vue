<template>
  <div class="login-container">
    <el-form :model="registerForm" :rules="rules" ref="registerForm" class="w_380 pl_10 pr_10 b_s mt_30 user-form">
      <el-form-item  prop="name">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-user"
          v-model="registerForm.name"
          placeholder="Username"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt_20 p_r"  prop="email">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-message"
          v-model="registerForm.email"
          placeholder="Email Address"
        ></el-input>
        <el-button type="primary" class="p_a p_r_0 p_t_1">发送验证码</el-button>
      </el-form-item>
      <el-form-item class="mt_20" prop="code">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-paperclip"
          v-model="registerForm.code"
          placeholder="Code"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt_20" prop="password">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-edit"
          v-model="registerForm.password"
          placeholder="Password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item class="mt_20" prop="checkPassword">
        <el-input
          class="c_f_c ft_16"
          prefix-icon="el-icon-edit"
          v-model="registerForm.checkPassword"
          placeholder="Confirm Password"
          type="password"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="h_1 w_100p bgc_br mt_45 mb_20"></div>
    <div class="action flex w_360">
      <div class="w_360 h_45 bgc_b_b t_c lh_45 c_f ft_14 r_5" @click="onSubmit('registerForm')">Sign Up</div>
    </div>
  </div>
</template>
<script>
import rulesMixin from "~/assets/js/userRuleMixin.js"
export default {
  mixins:[rulesMixin],
  layout: "user",
  data() {
    return {
      registerForm: {
        name: "",
        password:"",
        email:"",
        code:"",
        checkPassword:""
      }
    };
  },
  methods: {
    onSubmit(formName) {
     this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
           this.alert('请正确填写表单内容');
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