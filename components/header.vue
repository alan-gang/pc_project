<template>
  <div class="header-container c_f">
    <div class="side-controller">
      <i :class="isSlider?'el-icon-s-unfold':'el-icon-s-fold'" class="ml_20 ft_24 c_r" @click="changeSlider(isSlider= !isSlider)"></i>
    </div>
    <div class="header-main pr_20 ml_30">
      <search-container v-if="!showSearch"></search-container>
      <div class="c_tc">
        <el-tooltip  v-if="showSearch &&  (UserInfo.username && UserInfo.className)" class="item ml_10 mr_10" effect="dark" content="返回首页面" placement="bottom">
          <nuxt-link class="return-home  ft_12" to="/forum/forumlist/all">
            <i class="icon iconfont icon-dibudaohanglan-"></i>
            首页
          </nuxt-link>
        </el-tooltip>
        <span v-if="showSearch">{{showSearch}}</span>
      </div>
      <user-operation></user-operation>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import searchContainer from '@/components/home/searchContainer'
import userOperation from '@/components/user/userOperation'
export default {
  components: {
    searchContainer,
    userOperation
  },
  data () {
    return {
      isSlider: false
    }
  },
  computed: {
    ...mapState({
      showSearch: (state) => state.home.sidebarList.title === 'userSetting' ? '用户中心' : false,
      UserInfo: (state) => state.user.UserInfo
    })
  },
  methods: {
    ...mapMutations({
      changeSlider: 'home/changeSlider'
    })
  }
}
</script>

<style scoped lang="stylus">
  .header-container
      background-color: #141619;
      height 60px
      flex(flex-start)
      .header-main
        flex()
        flex-grow: 1;
        box-sizing: border-box;
        .return-home
          color rgba(255,255,255,.6)
          &:hover
            color rgba(255,255,255,1)
</style>
