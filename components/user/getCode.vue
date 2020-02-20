<template>
  <el-button type="primary" :loading="isSend" @click="_getCode">
    {{!isSend?'发送验证码':`${this.countDown} 秒后从新获取`}}
  </el-button>
</template>

<script>
import { getcode } from '~/api'
import rulesMixin from "~/assets/mixin/userRuleMixin.js"
export default {
  mixins: [rulesMixin],
  props: {
    emailValidator: Boolean,
    identity: String,
    email: String,
    type: String,
    isValidateMobile: String
  },
  created () {
    console.log(this)
  },
  data () {
    return {
      isSend: false,
      countDown: 0,
      timer: null,
    }
  },
  methods: {
    async  _getCode () {
      let status = this.type == 'email' ? this.emailValidator : this.isValidateMobile
      let msg = this.type == 'email' ? '请先输入邮箱并确认身份' : '请输入正确的手机号码'

      if (!status || !this.identity) {
        this.alert('请先输入邮箱并确认身份')
        return
      }
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
      let { code, data, message } = await getcode({ email: this.email, identity: this.identity })
      code === 0 ? this.alert(data.msg, this.identity == 1 ? 'success' : 'warning') : this.alert(message, 'warning')
    }
  },
}
</script>

<style scoped>
</style>
