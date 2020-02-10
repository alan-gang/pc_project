<template>
  <div class="login-container">
    <el-form :model="ruleForm"
             :rules="rules"
             ref="ruleForm"
             class="w_380 pl_10 pr_10 b_s mt_30 user-form">
      <el-form-item prop="name">
        <el-input class="c_f_c ft_16"
                  prefix-icon="el-icon-user"
                  v-model="ruleForm.name"
                  placeholder="Enter email login"></el-input>
      </el-form-item>
      <el-form-item class="mt_20"
                    prop="password">
        <el-input class="c_f_c ft_16"
                  prefix-icon="el-icon-edit"
                  v-model="ruleForm.password"
                  placeholder="Password"
                  type="password"></el-input>
      </el-form-item>
    </el-form>
    <el-checkbox v-model="saveSing"
                 class="ml_10 mt_25 f_x_s">stay signed in</el-checkbox>
    <div class="h_1 w_100p bgc_br mt_5 mb_20"></div>
    <div class="action flex w_360">
      <div class="w_145 h_35 bgc_b_b t_c lh_35 c_f ft_12 r_5 c_r"
           @click="$router.push('/user/resetpassword')">Lost password?</div>
      <div class="bgc_b_g w_60 h_35 t_c c_f r_5 lh_35 ft_12 c_r"
           @click="onSubmit('ruleForm')">Login</div>
    </div>
  </div>
</template>
<script>
import rulesMixin from "~/assets/js/userRuleMixin.js"
import { loginUser, getPublicKey } from '~/plugins/api'

export default {
  mixins: [rulesMixin],
  layout: "user",
  created () {
    // console.log(this)
  },
  data () {
    return {
      ruleForm: {
        name: "hg9558@126.com",
        password: "123456"
      },
      saveSing: true
    };
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this._sendUserInfo()
        } else {
          this.alert('请正确填写用户名和密码');
          return false;
        }
      });
    },
    async _sendUserInfo () {
      this.ruleForm.password = await this._getPublicKey()
      let { code, data, message } = await loginUser({ ...this.ruleForm })
      if (code == 1) {
        this.alert(message);
        return;
      } else {
        let token = data.token;
        localStorage.token = token;
        this.$router.push("/")
      }
    },
    /* 获取都断公钥 */
    async _getPublicKey () {
      let r = () => import('jsencrypt')
      let { JSEncrypt } = await r()
      return new Promise(async resolve => {
        let { data: { resultmap } } = await getPublicKey()
        let encryptor = new JSEncrypt();
        encryptor.setPublicKey(resultmap)
        resolve(encryptor.encrypt(this.ruleForm.password))
      })
    }
  }
};
</script>

<style scoped lang="stylus">
@import "../../assets/css/user/user.styl"
    .login-container
      flex(,column)
</style>
