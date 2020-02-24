<template>
  <div>
    <transition name="el-fade-in" mode="out-in">
      <nuxt-child />
    </transition>
  </div>
</template>

<script>
import { getSidebar } from '~/api'
import { mapState, mapActions } from 'vuex'

export default {
  // 获取侧面导航栏数据
  async fetch ({ store, $axios }) {
    let { sidebarList } = await getSidebar($axios, { title: 'userSetting' })
    store.commit('home/fillSidebar', sidebarList)
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
