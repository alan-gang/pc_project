<template>
  <div class="header-container c_f">
    <div class="side-controller">
      <i :class="isSlider?'el-icon-s-unfold':'el-icon-s-fold'"
         class="ml_20 ft_24 c_r"
         @click="changeSlider(isSlider= !isSlider)"></i>
    </div>
    <div class="header-main ml_30">
      <search-container></search-container>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import searchContainer from '@/components/home/searchContainer'
export default {
  components:{
    searchContainer
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
</style>
