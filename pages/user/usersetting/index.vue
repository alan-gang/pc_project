<template>

  <div class="account-container w_840">
    <el-form label-position="top" label-width="80px" :model="form" :show-message="showErrorMessage" :rules="rules">

      <div class="title-container ft_24 c_6 ft_b mt_30 ">账户与安全</div>

      <el-collapse v-model="activeNames" :accordion="true" @change="(isDisabled=true)">

        <!--  用户名输入开始 ===================================== -->
        <el-collapse-item class="mt_30" name="1">
          <template slot="title">
            <el-form-item prop="accountName" label="用户名" ref="accountName" class="w_100p">
              <el-input v-model="form.accountName" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入用户名" @input="isDisabled = false;activeNames='1'" :class="{on:activeNames == '1'}"></el-input>
            </el-form-item>
          </template>

          <!-- switch开关 -->
          <div class="mt_25">
            <div class="operate-container">
              <el-switch v-model="useNameLogin" active-text="使用用户名作为登录凭证">
              </el-switch>
            </div>

            <!--  按钮i组件  -->
            <btn-group :activeNames="activeNames" :isDisabled="isDisabled" index="1" @uodateUser="_updateUser(['accountName'],{accountName:form.accountName})" @changeActive="activeNames = '0'"></btn-group>
          </div>
        </el-collapse-item>
        <!--  用户名输入结束 ===================================== -->

        <!--  账户密码输入开始 ===================================== -->
        <el-collapse-item class="mt_30" name="2">
          <!-- 输入框模板 -->
          <template slot="title">
            <el-form-item prop="oldPassword" ref="oldPassword" label="密码" class="w_100p">
              <el-input v-model="form.oldPassword" suffix-icon="icon iconfont icon-write_fill" placeholder="修改密码前需要输入当前密码" type="password" :class="{on:activeNames == '2'}" @input="isDisabled = false;activeNames='2'"></el-input>
            </el-form-item>
          </template>

          <div class="mt_25 ">
            <div class="operate-container">
              <el-form-item prop="newPassword" ref="newPassword">
                <el-input :type="isShowPassword?'text':'password'" @input="isDisabled = false;activeNames='2'" v-model="form.newPassword" placeholder="新密码">
                  <span slot="suffix" class="icon iconfont icon-eye ft_18 c_r" @click="isShowPassword=!isShowPassword"></span>
                </el-input>
              </el-form-item>

              <el-form-item prop="checkPassword" ref="checkPassword">
                <el-input :type="isShowPassword?'text':'password'" @input="isDisabled = false;activeNames='2'" v-model="form.checkPassword" placeholder="确认新密码">
                  <span slot="suffix" class="icon iconfont icon-eye ft_18 c_r" @click="isShowPassword=!isShowPassword"></span>
                </el-input>
              </el-form-item>
            </div>

            <!--  按钮i组件  -->
            <div class="flex  j_s ">
              <btn-group :activeNames="activeNames" :isDisabled="isDisabled" index="2" @uodateUser="_updateUser(['oldPassword','newPassword','checkPassword'],{password:form.oldPassword,newPassword:form.newPassword})" @changeActive="activeNames = '0'"></btn-group>
              <nuxt-link to="/user/resetpassword" class="f_x_e ml_20 c_tc">忘记密码</nuxt-link>
            </div>
          </div>

        </el-collapse-item>
        <!--  账户密码输入结束 =====================================  -->

        <!-- 昵称处理  开始 ================================-->
        <el-collapse-item class="mt_30" name="3">
          <!-- 昵称输入框 -->
          <template slot="title">
            <el-form-item label="昵称" prop="nickName" ref="nickName" class="w_100p">
              <el-input @input="isDisabled=false;activeNames='3'" v-model="form.nickName" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入用户昵称" :class="{on:activeNames == '3'}"></el-input>
            </el-form-item>
          </template>

          <!--  昵称按钮i组件  -->
          <btn-group class="mt_30" :activeNames="activeNames" :isDisabled="isDisabled" index="3" @uodateUser="_updateUser(['nickName'],{nickName:form.nickName})" @changeActive="activeNames = '0'"></btn-group>
        </el-collapse-item>

        <!-- 昵称处理  开结束================================-->

        <!--  邮箱修改 开始==================================  -->
        <el-collapse-item class="mt_30" name="4">
          <template slot="title">
            <el-form-item label="绑定邮箱" prop="email" class="w_100p" ref="email">
              <el-input v-model="form.email" suffix-icon="icon iconfont icon-write_fill" @input="isDisabled=false;activeNames='4'" placeholder="请输入需要修改的邮箱" :class="{on:activeNames == '4'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_25 ">
            <div class="operate-container">
              <el-form-item prop="code">
                <el-input v-model="form.code" @input="isDisabled=false;activeNames='4'" placeholder="请输入获取到的验证码">
                  <template slot="append">
                    <!-- 邮箱组件-->
                    <get-code :isValidate="emailValidator" type="email" :identity="form.identity" :email="form.email" class=""></get-code>
                  </template>
                </el-input>
              </el-form-item>
            </div>
            <btn-group class="mt_30" :activeNames="activeNames" :isDisabled="isDisabled" index="4" @uodateUser="_updateUser(['email'],{email:form.email})" @changeActive="activeNames = '0'"></btn-group>
          </div>
        </el-collapse-item>

        <!--  邮箱修改 结束==================================  -->

        <!--手机验证码获取 开始===============================-->
        <el-collapse-item class="mt_30" name="5">

          <template slot="title">
            <el-form-item label="手机号码" prop="mobile" ref="mobile" class="w_100p">
              <el-input v-model="form.mobile" @input="isDisabled=false;activeNames='5'" suffix-icon="icon iconfont icon-write_fill" placeholder="请输入手机号码" :class="{on:activeNames == '5'}"></el-input>
            </el-form-item>

          </template>
          <div class="mt_30 ">
            <div class="operate-container">
              <el-form-item prop="mobileCode">
                <el-input v-model="form.mobileCode" @input="isDisabled=false;activeNames='5'" placeholder="请输入获取到的验证码">
                  <template slot="append">
                    <!-- 验证码组件 -->
                    <get-code :isValidate="isValidateMobile" type="mobile" :identity="form.identity" :mobile="form.mobile" class=""></get-code>
                  </template>
                </el-input>
              </el-form-item>
            </div>

            <!-- 手机按钮组件 -->
            <btn-group class="mt_30" :activeNames="activeNames" :isDisabled="isDisabled" index="5" @uodateUser="_updateUser(['mobile'],{mobile:form.mobile,mobileCode:form.mobileCode})" @changeActive="activeNames = '0'"></btn-group>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-form>

    <!--手机验证码获取 结束===============================-->

    <!-- 登陆完成之后相关操作 -->
    <div class="bottom-container ft_24 c_6 ft_b mt_50 ">
      其他
    </div>
    <div class="cancel-group mt_30 ml_15 c_6 ft_18">
      <el-button type="danger" @click="_destoryUser">注销账户</el-button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import rulesMixin from "~/assets/mixin/userRuleMixin.js"
import userMixin from '~/assets/mixin/user'
import { updateUser, delUser } from "~/api"
import { gLS, sLS, cLS } from '~/assets/js/handleStorage.js'
import btnGroup from '~/components/user/btnGroup.vue'
import getCode from '~/components/user/getCode.vue'


export default {
  mixins: [rulesMixin, userMixin],
  components: {
    btnGroup,
    getCode,
  },
  mounted () {
    this.$nextTick(() => {
      this.useNameLogin = gLS('user').hasOwnProperty('accountName')
    })
  },
  data () {
    return {
      activeNames: '0',
      isDisabled: true,
      useNameLogin: false,
      emailValidator: false,
      isValidateMobile: false,
      temporaryPassword: null,
      form: JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),
      isShowPassword: false
    };
  },
  methods: {
    /* 用户修改 */
    async _updateUser (formItem, data) {
      let checkStatus = formItem.every(item => this.$refs[item].validateState === 'success')

      /* 验证成功 */
      if (checkStatus) {
        /* 请求修改为密码修改的时候进行密码的加密操作 */
        if (data['password']) {
          data['password'] = await this._getPublicKey(data['password'])
          this.temporaryPassword = data['newPassword'] = await this._getPublicKey(data['newPassword'])
          this.form['oldPassword'] = ''
          this.form['newPassword'] = ''
          this.form['checkPassword'] = ''
        }
        // 当用户名为账户邮箱密码的时候进行本地数据存储
        (data['accountName'] || this.temporaryPassword || this.form['email']) && this.isSaveUserName(formItem.length)

        let res = await updateUser(data)

        if (res.code == 1) {
          res.status === 401 ? this.newLogin() : this.alert(res.message)
          return
        } else {
          sessionStorage.token = res.data.token;
          this.$store.commit('user/saveUserInfo', res.data.user);
          this.alert(res.data.msg, 'success')
        }

        this.activeNames = '0'
        this.isDisabled = true

      } else {
        this.alert('请检查表单后在进行数据提交')
      }
    },
    /* 本地存储用户 */
    isSaveUserName (len) {
      let obj = {
        accountName: this.form.accountName,
        email: this.form.email,
      }
      len > 1 && (obj.password = this.temporaryPassword)
      let userData = gLS('user')
      if (userData && userData.hasOwnProperty('accountName') && !this.useNameLogin) {
        delete obj.accountName
        delete userData.accountName
      }
      sLS('user', Object.assign(!userData ? { password: this.form.password } : userData, obj))
    },

    /* 当前用户删除 */
    async _destoryUser () {
      this.prompt('此操作将永久删除用户信息,是否继续？', async () => {
        let res = await delUser({
          _id: this.$store.state.user.UserInfo._id
        })
        cLS('user')
        if (res.code == 0) {
          this.alert('删除用户成功', 'error', 2000)
          this.$router.replace('/user/register')
        } else {
          this.alert(res.message)
        }
      })
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
@import '../css/index.styl';
</style>
