<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script>
import { sidebar } from '~/plugins/api'
export default {
  async fetch () {
    let res = await sidebar({ title: 'setting' })
    console.log(res)
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
