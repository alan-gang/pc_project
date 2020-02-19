<template>
  <div class="rest-wrapper wp_100 h_80  p_r mt_220">
    <div class="step-box w_1000 mg_0a">
      <el-steps :space="650"
                :active="activeNumber"
                finish-status="success"
                :align-center="true"
                process-status="error ">
        <el-step icon="el-icon-message"
                 title="确认邮箱"></el-step>
        <el-step icon="el-icon-s-unfold"
                 title="填写验证码"></el-step>
        <el-step icon="el-icon-s-goods"
                 title="重置密码"></el-step>
        <el-step icon="el-icon-success"
                 title="成功"></el-step>
      </el-steps>
    </div>
    <el-form ref="form"
             :model="form"
             :inline="activeNumber !== 2"
             :rules="rules"
             label-width="120px"
             class="w_839 mt_75">
      <el-form-item label="请输入邮箱地址"
                    prop="email"
                    v-if="activeNumber == 0">
        <el-input class="w_200"
                  v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label-width="200px"
                    label="请输入获取到的验证码"
                    prop="code"
                    v-if="activeNumber == 1">
        <el-input class="w_300"
                  v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="请输入密码"
                    prop="password"
                    label-width="200px"
                    v-if="activeNumber == 2">
        <el-input class="w_300"
                  type="password"
                  v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="请再次输入密码"
                    label-width="200px"
                    prop="checkPassword"
                    class="mt_20"
                    v-if="activeNumber == 2">
        <el-input class="w_300 "
                  type="password"
                  v-model="form.checkPassword"></el-input>
      </el-form-item>

      <el-form-item :class="{threeStyle:activeNumber == 2}">
        <el-button class="123"
                   type="primary"
                   :loading="isLoading"
                   v-if="activeNumber !=4"
                   @click="onSubmit('form')">下一步</el-button>
      </el-form-item>
    </el-form>
    <success-masker v-if="activeNumber == 4"
                    msg=""></success-masker>
  </div>

</template>

<script>
import rulesMixin from "~/assets/mixin/userRuleMixin.js"
import { checkCode, matchCode, resetPasswords } from '~/api'
import successMasker from '~/components/user/jumpCountdown'
import userMixin from '~/assets/mixin/user'

export default {
  mixins: [rulesMixin, userMixin],
  layout: "usersetting",
  components: {
    successMasker
  },
  head: {
    title: '密码重置'
  },
  data () {
    return {
      activeNumber: 0,
      isLoading: false,
      form: {
        email: '',
        code: "",
        password: "",
        checkPassword: "",
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.isLoading = true
          let url = '';
          switch (this.activeNumber) {
            case 0:
              this.onNextStep(checkCode, 1)
              break;
            case 1:
              this.onNextStep(matchCode, 2)
              break;
            case 2:
              this.onNextStep(resetPasswords, 4)
              break;
          }
        } else {
          this.alert('请正确填写邮箱');
          return false;
        }
      });
    },
    async onNextStep (url, index) {
      if (index === 4) {
        this.form.password = await this._getPublicKey(this.form.password)
        delete this.form.checkPassword
      }

      let { code, message, data } = await url(this.form)

      this.isLoading = false
      if (message) {
        this.alert(message)
        return
      }
      index && (this.activeNumber = index)
    }
  }
};
</script>

<style scoped lang="stylus">
.rest-wrapper
  flex(center,column)
  .step-box
    //  absolute()
  .threeStyle
    margin-top: 20px;
    text-align: right;
    width: 500px;
</style>
