<template>
  <el-cascader ref="className" class="ml_20"  :options="classOptions" readonly :placeholder="`${form.className?form.className:'请输入你的班级/专业'}`" v-model="form.className" @change=" _updateUser('className',{className:$refs['className'].getCheckedNodes()[0].pathLabels.join('/')})"></el-cascader>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>
