<template>
  <div class="btn-group mt_20">
    <el-button size="small" type="primary" :disabled="activeNames == index && isDisabled" @click="$emit('uodateUser')">确定</el-button>
    <el-button size="small" @click="$emit('changeActive')">取消</el-button>
  </div>
</template>

<script>
export default {
  props: {
    activeNames: String,
    isDisabled: Boolean,
    index: String
  }
}
</script>

<style scoped lang="stylus">
   .btn-group
      flex(flex-start)
      .cancel-group
          flex(flex-start)
</style>
