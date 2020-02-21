<template>
  <div class="login-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="w_380 pl_10 pr_10 b_s mt_30 user-form">
      <el-form-item v-if="!ruleForm.accountName " prop="email">
        <el-input class="c_f_c ft_16" prefix-icon="el-icon-message" v-model="ruleForm.email" placeholder="Enter email login"></el-input>
      </el-form-item>
      <el-form-item v-else prop="accountName">
        <el-input class="c_f_c ft_16" prefix-icon="el-icon-user" v-model="ruleForm.accountName" placeholder="Enter user Account"></el-input>
      </el-form-item>
      <el-form-item class="mt_20" prop="password">
        <el-input class="c_f_c ft_16" prefix-icon="el-icon-edit" v-model="ruleForm.password" placeholder="Password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-checkbox v-model="saveSing" class="ml_10 mt_25 f_x_s" @change="selectBoxStatus">stay signed in</el-checkbox>
    <div class="h_1 w_100p bgc_br mt_5 mb_20"></div>
    <div class="action flex w_360">
      <div class="w_145 h_35 bgc_b_b t_c lh_35 c_f ft_12 r_5 c_r" @click="$router.push('/user/resetpassword')">Lost password?</div>
      <el-button type="primary" :loading="loading" class="bgc_b_g  ft_12 b_n h_35" @click="onSubmit('ruleForm')">Login</el-button>
    </div>
  </div>
</template>
<script>
import userMixin from "~/assets/mixin/userMixin.js"
import dialogMixin from '~/assets/mixin/dialogMixin'
import { loginUser } from '~/api'
import { mapState } from 'vuex'

export default {
  mixins: [userMixin, dialogMixin],
  layout: "user",
  head: {
    title: '用户登录',

  },
  mounted () {
    this._fillUserInfo()
  },
  data () {
    return {
      ruleForm: {
        email: "",
        password: "",
        accountName: ""
      },
      saveSing: true,
      loading: false,
    };
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this._sendUserInfo()
        } else {
          this.alert('请正确填写用户名和密码');
          return false;
        }
      });
    },
    async _sendUserInfo () {
      let encryptionPassword = await this._getPublicKey(this.ruleForm.password)
      let { code, data, message } = await loginUser({ name: this.ruleForm.email, password: encryptionPassword, accountName: this.ruleForm.accountName })
      if (code == 1) {
        this.alert(message, 'warning', 1000);
      } else {
        let token = data.token;
        sessionStorage.token = token;
        let obj = { password: encryptionPassword }
        this.ruleForm.email ? obj.email = this.ruleForm.email : obj.accountName = this.ruleForm.accountName
        this.saveSing && (localStorage.user = JSON.stringify(obj))
        this.$store.commit('user/saveUserInfo', data.user);
        (this.UserInfo.username && this.UserInfo.className) || (this.UserInfo.identity == '2') ? this.$router.push('/') : this.$router.push("/user/usersetting/userMessage")
      }
      this.loading = false
    },
    async _fillUserInfo () {
      let userInfo = localStorage.user && JSON.parse(localStorage.user)
      if (!userInfo) return
      if (userInfo.accountName) {
        this.ruleForm.accountName = userInfo.accountName
      } else {
        this.ruleForm.email = userInfo.email
      }
      this.ruleForm.password = await this._parsingKey(userInfo.password)
    },
    selectBoxStatus (status) {
      this.saveSing = status
      !status && localStorage.removeItem('user')
    }
  },
  computed: {
    ...mapState('user', {
      UserInfo: state => state.UserInfo
    })
  }
};
</script>


<style scoped lang="stylus">
    @import "./css/user.styl"
    .login-container
      flex(,column)
</style>
