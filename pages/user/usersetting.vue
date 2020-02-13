<template>
  <div>
    <nuxt-child />
    {{msg}}
  </div>
</template>

<script>
import { sidebar } from '~/api'
export default {
  async asyncData ({ $axios }) {
    const ip = await $axios.$get('/home/sidebar/list?title=123')
    return { msg: ip }
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
