export default {
  data () {
    return {

    }
  },
  methods: {
    alert (message, type = "warning", duration = 2000) {
      this.$message({
        message,
        type,
        duration
      });
    },
    confirm (messgae, type = "warning", callback) {
      this.$alert(messgae, '温馨提示', {
        confirmButtonText: '确定',
        type,
        callback
      });
    },
    prompt (message, callback) {
      this.$confirm(message, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      }).then(callback).catch(() => {
        this.$message({
          type: 'success',
          message: '您是对的，三思而后行',
          duration: 1000
        });
      });
    },
  }
}
