let rulesMixin = {
  data () {
    return {
      rules: {
        name: [
          { required: true, message: '帐户名称不能为空', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'blur' }
        ],
        accountName: [
          { required: true, message: '帐户名称不能为空', trigger: 'change' },
          { min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, message: '位数不正确', trigger: 'blur' }
        ],
        email: [{
          validator: (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            // console.log(value)
            if (!value) {
              this.emailValidator = false
              return callback(new Error('邮箱不能为空'))
            }
            setTimeout(() => {
              if (mailReg.test(value)) {
                this.emailValidator = true
                callback()
              } else {
                this.emailValidator = false
                callback(new Error('请输入正确的邮箱格式'))
              }
            }, 100)
          },
          trigger: 'blur'
        },

        ],
        checkPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ],
        oldPassword: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    alert (message, type = "warning", duration = 1000) {
      this.$message({
        message,
        type,
        duration
      });
    },
    confirm (message, type, showCancelButton) {
      let num = 5
      let msg;
      setInterval(() => {
        --num
        msg = `<div>哈哈哈${num}</div>`
      }, 1000);

      this.$confirm(msg, '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '',
        dangerouslyUseHTMLString: true,
        showClose: false,
        closeOnClickModal: false,
        distinguishCancelAndClose: true,
        showCancelButton,
        type,
      }).then(() => {
        //  this.$message({
        //    type: 'success',
        //    message: '删除成功!'
        //  });
      })
      /* .catch(() => {
             this.$message({
               type: 'info',
               message: '已取消删除'
             });
           }); */
    }
  }

};
export default rulesMixin;
