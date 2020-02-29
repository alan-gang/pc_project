<template>
  <el-dialog title="班级绑定" :visible="isShowTeacherFom" width="40%">
    <el-form :model="form">
      <el-form-item label="手机号码" label-width="80">
        <el-input v-model="form.mobile" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" label-width="80">
        <el-select v-model="form.classLists" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="isShowTeacherFom = false">取 消</el-button>
      <el-button type="primary" @click="isShowTeacherFom = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      form: JSON.parse(JSON.stringify(this.$store.state.user.UserInfo)),
    }
  },
  methods: {

  },
  computed: {
    ...mapState('user', {
      isShowTeacherFom: (state) => state.isShowTeacherFom
    })
  }
}
</script>

<style scoped>
</style>
