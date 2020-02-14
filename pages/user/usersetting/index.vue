<template>
  <div class="account-container w_840">
    <el-form label-position="top"
             label-width="80px"
             :model="userForm">
      <div class="title-container ft_24 c_6 ft_b mt_30 mb_30">
        账户与安全
      </div>
      <el-collapse v-model="activeNames"
                   @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            <el-form-item label="登录用户名"
                          class="w_100p">
              <el-input v-model="userForm.name"
                        placeholder="请输入用户名"></el-input>
            </el-form-item>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback"
                          name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency"
                          name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1'],
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
      .title-container
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
        >>>.el-form-item__label
                  font-size 17px
                  color: rgba(0,0,0,.7);
                  padding 0
                  padding-left: 12px;
                  margin-bottom:-25px;

</style>
