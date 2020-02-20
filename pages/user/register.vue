<template>
  <div class="login-container">
    <el-form :model="form" :rules="rules" ref="form" class="w_380 pl_10 pr_10 b_s mt_30 user-form">

      <el-form-item class="mt_20 p_r" prop="email">
        <el-input class="c_f_c ft_16" prefix-icon="el-icon-message" v-model="form.email" placeholder="Email Address"></el-input>
      </el-form-item>
      <el-form-item class="mt_20 identity">
        <label for="" class="icon iconfont icon-banjiguanli1"></label>
        <el-select v-model="form.identity" placeholder="Please select identity">
          <el-option label="student" value="1"></el-option>
          <el-option label="teacher" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="mt_20" prop="code">
        <el-input class="c_f_c ft_16" prefix-icon="el-icon-paperclip" v-model="form.code" placeholder="Code"></el-input>

        <!-- 邮箱组件-->
        <get-code :emailValidator="emailValidator" :identity="form.identity" :email="form.email" type="email" class="p_a p_r_0 p_t_1"></get-code>

      </el-form-item>
      <el-form-item class="mt_20" prop="password">
        <el-input class="c_f_c ft_16" prefix-icon="el-icon-edit" v-model="form.password" placeholder="Password" type="password"></el-input>
      </el-form-item>
      <el-form-item class="mt_20" prop="checkPassword">
        <el-input class="c_f_c ft_16 confirm-password" prefix-icon="el-icon-edit" v-model="form.checkPassword" placeholder="Confirm Password" type="password"></el-input>
      </el-form-item>
    </el-form>
    <div class="h_1 w_100p bgc_br mt_45 mb_20"></div>
    <div class="action flex w_360">
      <el-button type="primary" :loading="isLoading" class="bgc_b_b ft_14 w_100p" @click="_onSubmit('form')">Sign Up</el-button>
    </div>
  </div>
</template>



<script>
import rulesMixin from "~/assets/mixin/userRuleMixin.js"
import userMixin from '~/assets/mixin/user'
import { getcode, registerUser } from '~/api'
import getCode from '~/components/user/getCode.vue'

export default {
  mixins: [rulesMixin, userMixin],
  layout: "user",
  head: {
    title: '用户注册'
  },
  components: {
    getCode
  },
  data () {
    return {
      isSend: false,
      emailValidator: false,
      isLoading: false,
      countDown: 5,
      timer: null,
      form: {
        password: "123456",
        identity: '1',
        email: "hg9558@126.com",
        code: "",
        checkPassword: "123456"
      }
    };
  },
  methods: {
    _onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.isLoading = true
          let password = await this._getPublicKey(this.form.password)

          let { code, data, message } = await registerUser({
            password, identity: this.form.identity, email: this.form.email, code: this.form.code
          })
          if (code === 1) {
            this.alert(message)
          } else {
            sessionStorage.token = data.token
            this.$store.commit('user/saveUserInfo', data.user)
            this.$router.replace('/user/usersetting')
          }
          this.isLoading = false
        } else {
          this.alert('请正确填写表单内容');
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang="stylus">
    @import "./css/user.styl"
</style>
