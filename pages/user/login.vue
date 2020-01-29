<template>
  <div class="login-wrapper">
    <el-form :model="loginForm" status-icon ref="loginForm" class="demo-ruleForm" :rules="rules">
      <el-form-item prop="userName">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="loginForm.userName"></el-input>
      </el-form-item>
      <el-form-item prop="userPassword">
        <el-input
          prefix-icon="el-icon-lock"
          type="password"
          v-model="loginForm.userPassword"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-button
        type="danger"
        size="medium"
        class="login-btn"
        @click="submitForm('loginForm')"
        :loading="loading"
      >登录</el-button>
    </el-form>
    <!-- <router-link class="action-register" tag="div" to="/user/register">还没有账号,马上注册</router-link> -->
  </div>
</template>
<script>
export default {
  mixins: [rulesMixin],
  data() {
    return {
      loginForm: {
        userName: "cooldddd",
        userPassword: "123456",
        captcha: "",
      }
    };
  },
  computed: {
      src() {
          return checkEnvironment() == 'development'?'http://localhost:5001/api/user/getCaptcha':'/api/user/getCaptcha';
      }
  },
  methods: {
    changeCaptcha(e) {
      let url = checkEnvironment() == "development" ? "http://localhost:5001" : "";
      e.target.src = `${url}/api/user/getCaptcha?${Math.random()}`;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          this.loading = true;
          let status = await userLogin(this.loginForm);
          if (status.code == 1) {
            this.$message({
              message: status.errInfo,
              type: "warning",
              duration: 1000
            });
          } else {
            saveToken(status.token);
            this.$router.replace("/");
          }
          this.loading = false;

        } else {
          this.$message({
            message: "请重新检查表单进行提交",
            type: "warning",
            duration: 1000
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="stylus">
    
</style>