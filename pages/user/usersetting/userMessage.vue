<template>
  <div class="userinfo-container w_840">
    <div class="title-container ft_24 c_6 ft_b mt_30 ">
      个人资料
    </div>
    <el-form label-position="right"
             label-width="80px"
             class="mt_40"
             :model="userForm">
      <el-form-item label="姓名"
                    class="w_100p">
        <el-input ref="username"
                  v-model="userForm.name"
                  class="ml_20"
                  @focus="activeIndex = 1"
                  @blur="activeIndex=-1"
                  placeholder="请输入姓名">
          <template slot="suffix">
            <div v-if="activeIndex !== 1"
                 class="c_e c_r"
                 @click="$refs.username.focus()">
              <i class="icon iconfont icon-write_fill"></i>
              <span>修改</span>
            </div>
            <div v-else>
              <el-button type="text">保存</el-button>
              <el-link :underline="false">取消</el-link>
            </div>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="性别"
                    class="w_100p">
                    <div class="ml_20">

        <el-radio v-model="userForm.gender"
                  label="1">男孩</el-radio>
        <el-radio v-model="userForm.gender"
                  label="2">女孩</el-radio>
                    </div>
      </el-form-item>
      <el-form-item label="出生日期"
                    class="w_100p">
        <el-date-picker class="ml_20" v-model="userForm.date"
                        type="date"
                        placeholder="选择出生年月">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="家乡"
                    class="w_100p">
        <el-date-picker class="ml_20" v-model="userForm.date"
                        type="date"
                        placeholder="选择出生年月">
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: -1,
      useNameLogin: false,
      userForm: {
        name: "",
        gender: '',
        date: ''
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
    .userinfo-container
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
    .userinfo-container
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
