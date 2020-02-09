<template>
  <div class="header-container c_f">
    <div class="side-controller">
      <i :class="isSlider?'el-icon-s-unfold':'el-icon-s-fold'"
         class="ml_20 ft_24 c_r"
         @click="changeSlider(isSlider= !isSlider)"></i>
    </div>
    <div class="header-main pr_20 ml_30">
      <search-container></search-container>
      <user-operation></user-operation>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import searchContainer from '@/components/home/searchContainer'
import userOperation from '@/components/user/userOperation'
export default {
  components:{
    searchContainer,
    userOperation
  },
  data () {
    return {
      isSlider: false
    }
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
</style>
