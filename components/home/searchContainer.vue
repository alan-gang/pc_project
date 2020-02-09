<template>
  <div class="search-container">
    <el-select class="w_104 bgc_t"
               v-model="searchCondition"
               placeholder="查询条件">
      <el-option label="标题"
                 value="title"></el-option>
      <el-option label="关键字"
                 value="keyword"></el-option>
    </el-select>
    <div class="search-wrapper pl_15 pr_15 r_22">
      <el-input :class="{on:showSearch}"
                placeholder="请输入搜索内容"
                v-model="searchval">
      </el-input>
      <i slot="suffix"
         @click="showSearch=!showSearch"
         class="el-icon-search c_i_c ft_b ft_18 c_r z_101"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchCondition: '',
      searchval: '',
      showSearch: false
    }
  },
}
</script>

<style scoped lang="stylus">
  .search-container
    flex(flex-start)
    >>>
      .el-input__inner
        background-color transparent
        border none
      .el-select .el-input.is-focus .el-input__inner
        border-color none
      .el-select .el-input .el-select__caret
        color #fff
    .search-wrapper
          cursor pointer
          background: #1F262D;
          flex()
          .el-input
            width 0
            transition all .3s ease
            &.on
              width 227px
            >>>.el-input__inner
                      color #fff
</style>

<style>
/* element-ui 样式修改 */

.el-input__inner::placeholder {
  color: #ffffff;
}

.el-input__inner::-webkit-input-placeholder {
  /* WebKit browsers 适配谷歌 */
  color: #ffffff;
}

.el-input__inner:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 适配火狐 */
  color: #ffffff;
}

.el-input__inner::-moz-placeholder {
  /* Mozilla Firefox 19+ 适配火狐 */
  color: #ffffff;
}

.el-input__inner:-ms-input-placeholder {
  /* Internet Explorer 10+  适配ie */
  color: #ffffff;
}
</style>
