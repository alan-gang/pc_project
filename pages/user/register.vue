<template>
  <div class="login-container">
    <el-form :model="registerForm"
             :rules="rules"
             ref="registerForm"
             class="w_380 pl_10 pr_10 b_s mt_30 user-form">
      <!-- <el-form-item prop="name">
        <el-input class="c_f_c ft_16"
                  prefix-icon="el-icon-user"
                  v-model="registerForm.name"
                  placeholder="Username"></el-input>
      </el-form-item> -->
      <el-form-item class="mt_20 p_r"
                    prop="email">
        <el-input class="c_f_c ft_16"
                  prefix-icon="el-icon-message"
                  v-model="registerForm.email"
                  placeholder="Email Address"></el-input>
      </el-form-item>
      <el-form-item class="mt_20 identity">
        <label for=""
               class="icon iconfont icon-banjiguanli1"></label>
        <el-select v-model="registerForm.identity"
                   placeholder="Please select identity">
          <el-option label="student"
                     value="1"></el-option>
          <el-option label="teacher"
                     value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="mt_20"
                    prop="code">
        <el-input class="c_f_c ft_16"
                  prefix-icon="el-icon-paperclip"
                  v-model="registerForm.code"
                  placeholder="Code"></el-input>
        <el-button type="primary"
                   class="p_a p_r_0 p_t_1"
                   :loading="isSend"
                   @click="_getCode">
          {{!isSend?'发送验证码':`${this.countDown} 秒后从新获取`}}
        </el-button>
      </el-form-item>
      <el-form-item class="mt_20"
                    prop="password">
        <el-input class="c_f_c ft_16"
                  prefix-icon="el-icon-edit"
                  v-model="registerForm.password"
                  placeholder="Password"
                  type="password"></el-input>
      </el-form-item>
      <el-form-item class="mt_20"
                    prop="checkPassword">
        <el-input class="c_f_c ft_16 confirm-password"
                  prefix-icon="el-icon-edit"
                  v-model="registerForm.checkPassword"
                  placeholder="Confirm Password"
                  type="password"></el-input>
      </el-form-item>
    </el-form>
    <div class="h_1 w_100p bgc_br mt_45 mb_20"></div>
    <div class="action flex w_360">
      <div class="w_360 h_45 bgc_b_b t_c lh_45 c_f ft_14 r_5 c_r"
           @click="_onSubmit('registerForm')">Sign Up</div>
    </div>
  </div>
</template>

<script>
import rulesMixin from "~/assets/js/userRuleMixin.js"
import { getcode,registerUser } from '~/plugins/api'

export default {
  mixins: [rulesMixin],
  layout: "user",
  data () {
    return {
      isSend: false,
      emailValidator: false,
      countDown: 5,
      timer: null,
      registerForm: {
        password: "",
        identity: '',
        email: "",
        code: "",
        checkPassword: ""
      }
    };
  },
  methods: {
    _onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let res  = await  registerUser({...this.registerForm})
        } else {
          this.alert('请正确填写表单内容');
          return false;
        }
      });
    },
    async _getCode () {
      if (!this.emailValidator || !this.registerForm.identity) {
        this.alert('请先输入邮箱并确认身份')
        return
      }
      let { code, data } = await getcode({ email: this.registerForm.email, identity: this.registerForm.identity })
      code === 0 && this.alert(data.msg, this.registerForm.identity == 1 ? 'success' : 'warning');
      this.isSend = true
      this.countDown = 5;
      this.timer = setInterval(() => {
        if (this.countDown < 1) {
          clearInterval(this.timer)
          this.isSend = false
          return
        }
        this.countDown--
      }, 1000);
    }
  },
};
</script>

<style scoped lang="stylus">
@import "../../assets/css/user/user.styl"
    .login-container
      flex(,column)
      .icon-banjiguanli1
        width: 35px;
        border-top-left-radius: 4px;
        display: inline-block;
        text-align: center;
        background: #ffb848;
        border-bottom-left-radius: 4px;
        color: #fff;
        font-size: 19px;

      .identity
        >>>.el-form-item__content
                  display flex
                  .el-select
                    flex-grow 1
                    .el-input__inner
                      text-indent 0px
                      border-top-left-radius 0!important
                      border-bottom-left-radius 0!important
</style>
