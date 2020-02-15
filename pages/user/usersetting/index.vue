<template>
  <div class="account-container w_840">
    <el-form label-position="top"
             label-width="80px"
             :model="userForm">
      <div class="title-container ft_24 c_6 ft_b mt_30 ">
        账户与安全
      </div>
      <el-collapse v-model="activeNames"
                   :accordion="true"
                   @change="(arr) => activeClass = arr[0]">
        <el-collapse-item class="mt_30"
                          name="1">
          <template slot="title">
            <el-form-item label="登录用户名"
                          class="w_100p">
              <el-input v-model="userForm.name"
                        suffix-icon="icon iconfont icon-write_fill"
                        placeholder="请输入用户名"
                        :class="{on:activeClass == '1'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15">
            <div class="operate-container">
              <el-switch v-model="useNameLogin"
                         active-text="使用用户名作为登录凭证">
              </el-switch>
            </div>
            <div class="btn-group mt_20">
              <el-button size="small"
                         type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item class="mt_30"
                          name="2">
          <template slot="title">
            <el-form-item label="密码"
                          class="w_100p">
              <el-input v-model="userForm.name"
                        suffix-icon="icon iconfont icon-write_fill"
                        placeholder="当前密码"
                        type="password"
                        :class="{on:activeClass == '2'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15 ">
            <div class="operate-container">
              <el-input type="password"
                        v-model="userForm.name"
                        placeholder="新密码"></el-input>
              <el-input type="password"
                        v-model="userForm.name"
                        placeholder="确认新密码"></el-input>
            </div>
            <div class="btn-group mt_20">
              <el-button size="small"
                         type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
              <nuxt-link to="/"
                         class="c_tc f_x_e ml_15">忘记密码</nuxt-link>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item class="mt_30"
                          name="3">
          <template slot="title">
            <el-form-item label="显示昵称"
                          class="w_100p">
              <el-input v-model="userForm.name"
                        suffix-icon="icon iconfont icon-write_fill"
                        placeholder="请输入用户名"
                        :class="{on:activeClass == '3'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15 ">
            <div class="btn-group mt_20">
              <el-button size="small"
                         type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item class="mt_30"
                          name="4">
          <template slot="title">
            <el-form-item label="邮箱"
                          class="w_100p">
              <el-input v-model="userForm.name"
                        suffix-icon="icon iconfont icon-write_fill"
                        placeholder="请输入邮箱"
                        :class="{on:activeClass == '4'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15 ">
            <div class="operate-container">
              <el-input v-model="userForm.name"
                        placeholder="请输入获取到的验证码">
                <template slot="append">
                  <el-button type="primary">主要按钮</el-button>
                </template>
              </el-input>
            </div>
            <div class="btn-group mt_20">
              <el-button size="small"
                         type="primary">确定</el-button>
              <el-button size="small">取消</el-button>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item class="mt_30"
                          name="5">
          <template slot="title">
            <el-form-item label="手机"
                          class="w_100p">
              <el-input v-model="userForm.name"
                        suffix-icon="icon iconfont icon-write_fill"
                        placeholder="请输入手机号码"
                        :class="{on:activeClass == '5'}"></el-input>
            </el-form-item>
          </template>
          <div class="mt_15 ">
            <div class="operate-container">
              <el-input v-model="userForm.name"
                        placeholder="请输入获取到的验证码">
                <template slot="append">
                  <el-button type="primary">主要按钮</el-button>
                </template>
              </el-input>
            </div>
            <div class="btn-group mt_20">
              <el-button size="small"
                         type="primary">确定</el-button>
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
      <h3>注销账户</h3>
      <span class="c_tc ft_16 f_x_e ml_30 c_r">注销</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['0'],
      activeClass: '1',
      useNameLogin: false,
      userForm: {
        name: "",
      }
    };
  },
  methods: {
    handleChange (val) {
      console.log(val);
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
      .btn-group
        flex(flex-start)
      .cancel-group
          flex(flex-start)

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
