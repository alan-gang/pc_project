<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
import { getSidebar } from '~/api'
export default {
  async fetch ({ store, $axios }) {
    const { data: { sidebarList } } = await getSidebar($axios, { title: 'userSetting' })
    store.commit('home/fillSidebar', sidebarList)
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
