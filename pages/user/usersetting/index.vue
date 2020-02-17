<template>

  <div class="account-container w_840">
    <el-form label-position="top" label-width="80px" :model="form" :show-message="showErrorMessage" :rules="rules">

      <div class="title-container ft_24 c_6 ft_b mt_30 ">账户与安全</div>

      <el-collapse v-model="activeNames" :accordion="true">
        <!--  用户名输入  -->
        <el-collapse-item class="mt_30" name="1">
          <template slot="title">
            <el-form-item prop="accountName" label="登录用户名" ref="accountName" class="w_100p">
              <el-input v-model="form.accountName" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入用户名" @input="isDisabled = false" :class="{on:activeNames == '1'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_25">
            <div class="operate-container">
              <el-switch v-model="useNameLogin" active-text="使用用户名作为登录凭证">
              </el-switch>
            </div>
            <!--  按钮i组件  -->
            <btn-group :activeNames="activeNames" :isDisabled="isDisabled" index="1" @uodateUser="_updateUser(['accountName'],{accountName:form.accountName})" @changeActive="activeNames = '0'"></btn-group>
          </div>
        </el-collapse-item>

        <!--  账户密码输入  -->
        <el-collapse-item class="mt_30" name="2">
          <template slot="title">
            <el-form-item prop="oldPassword" ref="oldPassword" label="密码修改" class="w_100p">
              <el-input v-model="form.oldPassword" suffix-icon="icon iconfont icon-write_fill" placeholder="修改密码前需要输入当前密码" type="password" :class="{on:activeNames == '2'}" @input="isDisabled = true"></el-input>
            </el-form-item>
          </template>

          <div class="mt_25 ">
            <div class="operate-container">
              <el-form-item prop="newPassword" ref="newPassword">
                <el-input :type="isShowPassword?'text':'password'" @input="isDisabled = true" v-model="form.newPassword" placeholder="新密码">
                  <span slot="suffix" class="icon iconfont icon-eye ft_18 c_r" @click="isShowPassword=!isShowPassword"></span>
                </el-input>
              </el-form-item>
              <el-form-item prop="checkPassword" ref="checkPassword">
                <el-input :type="isShowPassword?'text':'password'" @input="isDisabled = true" v-model="form.checkPassword" placeholder="确认新密码">
                  <span slot="suffix" class="icon iconfont icon-eye ft_18 c_r" @click="isShowPassword=!isShowPassword"></span>
                </el-input>
              </el-form-item>
            </div>
            <!--  按钮i组件  -->
            <btn-group :activeNames="activeNames" :isDisabled="isDisabled" index="2" @uodateUser="_updateUser(['oldPassword','newPassword','checkPassword'],{password:form.newPassword})" @changeActive="activeNames = '0'"></btn-group>
          </div>
        </el-collapse-item>

        <el-collapse-item class="mt_30" name="3">
          <template slot="title">
            <el-form-item label="显示昵称" prop="accountName" class="w_100p">
              <el-input v-model="form.nickName" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入用户昵称" :class="{on:activeNames == '3'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15 ">
            <div class="btn-group mt_20">
              <el-button size="small" type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item class="mt_30" name="4">
          <template slot="title">
            <el-form-item label="邮箱" prop="name" class="w_100p">
              <el-input v-model="form.email" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入邮箱" :class="{on:activeNames == '4'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_25 ">
            <div class="operate-container">
              <el-form-item prop="code">
                <el-input v-model="form.code" placeholder="请输入获取到的验证码">
                  <template slot="append">
                    <el-button type="primary">主要按钮</el-button>
                  </template>
                </el-input>
              </el-form-item>
            </div>
            <div class="btn-group mt_20">
              <el-button size="small" type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item class="mt_30" name="5">
          <template slot="title">
            <el-form-item label="手机" prop="mobile" class="w_100p">
              <el-input v-model="form.mobile" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入手机号码" :class="{on:activeNames == '5'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15 ">
            <div class="operate-container">
              <el-form-item prop="code">
                <el-input v-model="form.mobileCode" placeholder="请输入获取到的验证码">
                  <template slot="append">
                    <el-button type="primary">主要按钮</el-button>
                  </template>
                </el-input>
              </el-form-item>
            </div>
            <div class="btn-group mt_20">
              <el-button size="small" type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
    <div class="bottom-container ft_24 c_6 ft_b mt_50 ">
      其他
    </div>
    <div class="cancel-group mt_30 ml_20 c_6 ft_18">
      <!-- <h3>注销账户</h3>
      <span class="c_tc ft_16 f_x_e ml_30 c_r">注销</span> -->
      <el-button type="primary" :disabled="isLinkHome">跳转首页</el-button>
      <el-button type="danger">注销账户</el-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import rulesMixin from "~/assets/mixin/userRuleMixin.js"
import { updateUser } from "~/api"
import { gLS, sLS } from '~/assets/js/handle.js'
import btnGroup from '~/components/user/btnGroup.vue'
export default {
  mixins: [rulesMixin],
  components: {
    btnGroup
  },
  mounted () {
    this.$nextTick(() => {
      this.useNameLogin = gLS('user').hasOwnProperty('accountName')
    })
  },
  watch: {
    activeNames (val) {

    }
  },
  data () {
    return {
      activeNames: '0',
      isDisabled: true,
      useNameLogin: false,
      form: JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),
      isLinkHome: true,
      isShowPassword: false
    };
  },
  methods: {
    async _updateUser (formItem, data) {
      console.log(formItem)
      return
      console.log(this.$refs[formItem].validateState)
      return
      if (this.$refs[formItem].validateState == 'success') {
        data['accountName'] && this.isSaveUserName()
        let { data: { msg, user } } = await updateUser(data)
        this.activeNames = '0'
        this.isDisabled = true
        this.$store.commit('user/saveUserInfo', user);
        this.alert(msg, 'success')
      } else {
        this.alert(this.$refs[formItem].validateMessage)
      }
    },
    isSaveUserName () {
      let obj = {
        accountName: this.form.accountName,
        email: this.form.email,
        password: this.form.password
      }
      let userData = gLS('user')
      if (userData && userData.hasOwnProperty('accountName') && !this.useNameLogin) {
        delete obj.accountName
      }
      sLS('user', obj)
    }
  },
  computed: {
    showErrorMessage () {
      return Boolean(this.activeNames)
    }
  }
}
</script>

<style scoped lang="stylus">
    .account-container
      margin 0 auto
      .title-container,.bottom-container
        flex(flex-start)
        &:before
            content: "";
            display: block;
            width: .4em;
            height: 1em;
            margin-left: -.5em;
            margin-right: 16px;
            background-color: #3494fc;
</style>

<style scoped lang="stylus">
    .account-container
        >>>.el-collapse
                  border none
        >>>.el-collapse-item__header
                  border none
        >>>.el-input__inner
                  border:none
                  border-radius 0
                  border-bottom: 1px solid #DCDFE6;
        >>>.el-input__inner:focus
                  border-bottom-color: #409EFF !important
        >>>.el-form-item.is-required
                    .el-form-item__label
                        padding-left 0
        >>>.el-form-item__label
                  font-size 17px
                  color: rgba(0,0,0,.7);
                  padding 0
                  font-weight: bold
                  padding-left: 12px;
                  margin-bottom:-25px;
        >>>.el-collapse-item__arrow
                  display none
                .on
                  >>>.el-input__suffix
                              color #409eff
        >>>.el-collapse-item__wrap
                    border none
</style>
