<template>
  <el-button type="primary" :loading="isSend" @click="_getCode">
    {{!isSend?`发送${type=='email'?'邮箱':'手机'}验证码`:`${this.countDown} 秒后从新获取`}}
  </el-button>
</template>

<script>
import { getcode, getMobileCode } from '~/api'
import rulesMixin from "~/assets/mixin/userRuleMixin.js"
export default {
  mixins: [rulesMixin],
  props: {
    identity: String,
    email: String,
    type: String,
    mobile: String,
    isValidate: Boolean
  },
  data () {
    return {
      isSend: false,
      countDown: 0,
      timer: null,
      url: null,
      msg: null,
      sendData: null
    }
  },
  methods: {
    async  _getCode () {

      if (this.type == 'email') {
        this.msg = '请先输入邮箱并确认身份'
        this.url = getcode
        this.sendData = { email: this.email, identity: this.identity }
      } else {
        this.msg = '请输入正确的手机号码'
        this.url = getMobileCode
        this.sendData = { mobile: this.mobile, identity: this.identity }
      }


      /* 当没有验证通过时候，无法进行验证获取 */
      if (!this.isValidate || !this.identity) {
        this.alert(this.msg)
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

      let { code, data, status, message } = await this.url(this.sendData);
      if (status == 401) {
        this.alert('频率过快,绑定手机失败', 'warning')
        return
      }
      code === 0 ? this.alert(data.msg, this.identity == 1 ? 'success' : 'warning') : this.alert(message, 'warning');
    }
  },
}
</script>

<style scoped>
</style>
