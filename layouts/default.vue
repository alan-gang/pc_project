<template>
  <el-container v-loading="loadingMasker" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.5)" class="main-container">
    <m-sidebar></m-sidebar>
    <div class="content-container">
      <m-header></m-header>
      <nav-header v-if="isShowNavHeader"></nav-header>
      <el-main>
        <nuxt />
        <!-- 显示老师第一次注册对话框 -->
      </el-main>
    </div>
    <teacher-form></teacher-form>
  </el-container>
</template>

<script>

import mHeader from '~/components/header'
import mSidebar from '~/components/sidebar'
import navHeader from '~/components/navHeader'
import { mapState, mapMutations } from 'vuex'
import teacherForm from '~/components/dialog/teacherForm'
export default {
  components: {
    mHeader,
    mSidebar,
    navHeader,
    teacherForm
  },
  mounted () {
    this.checkIsUser()
  },
  data () {
    return {
      isShowNavHeader: true
    }
  },
  methods: {
    checkIsUser () {
      if (this.UserInfo.identity == '1' || this.UserInfo.classLists.length) return
      this.isShowTeacherForm(true)
    },
    ...mapMutations({
      isShowTeacherForm: 'user/showTeacherForm'
    })
  },
  computed: {
    ...mapState(['loadingMasker']),
    ...mapState('user', {
      UserInfo: state => state.UserInfo
    })
  }
}
</script>

<style scoped lang="stylus">
  .main-container
    height 100%
    display flex
    .content-container
      width 100%
    .el-main
      overflow hidden
</style>
