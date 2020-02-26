<template>
  <div>
   论坛界面
    <hr>
  </div>
</template>

<script>
   import { getSidebar } from '~/api'
   import { mapState, mapActions } from 'vuex'
  export default {
        // 获取侧面导航栏数据
        async fetch ({ store, $axios }) {
            let { sidebarList } = await getSidebar($axios, { title: 'forum' })
            store.commit('home/fillSidebar', sidebarList)
        }
  }
</script>

<style scoped>

</style>
