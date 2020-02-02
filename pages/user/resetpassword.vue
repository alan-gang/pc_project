<template>
  <div class="rest-wrapper wp_100 h_80  p_r mt_60">
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
    <el-form ref="forgetForm"
             :model="forgetForm"
             :inline="true"
             :rules="rules"
             label-width="120px"
             class="w_839 mt_75">
      <el-form-item
       label="请输入邮箱地址"
       prop="email"
      v-if="activeNumber == 0"
       >
        <el-input class="w_200"
                  v-model="forgetForm.email"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :loading="isLoading"
                   @click="onSubmit('forgetForm')">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
import rulesMixin from "~/assets/js/userRuleMixin.js"
import {checkCode} from '~/plugins/api'
export default {
  mixins: [rulesMixin],
  layout: "usersetting",
  data () {
    return {
      activeNumber: 0,
      isLoading:false,
      forgetForm: {
        email: '',
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
              let {code,message,data} = await checkCode({email:this.forgetForm.email})
               this.isLoading = false
              if(message) {
                this.alert(message)
                return
              }
              console.log(data)
              break;
            default:
              break;
          }
        } else {
          this.alert('请正确填写邮箱');
          return false;
        }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
.rest-wrapper
  flex(center,column)
  .step-box
    //  absolute()
</style>
