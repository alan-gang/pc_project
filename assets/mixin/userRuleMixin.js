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
        oldPassword: [
          { message: '原有密码不能为空', trigger: 'change' },
          { min: 6, max: 15, message: '密码长度在 6 到 15个字符', trigger: 'change' }
        ],
        newPassword: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { min: 6, max: 15, message: '密码长度在 6 到 15个字符', trigger: 'blur' }
        ],
        checkPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 6, max: 15, message: '确认密码长度在 6 到 15个字符', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              let pre = this.form.newPassword ? this.form.newPassword : this.form.password
              if (value !== pre) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '请输入邮箱验证码', trigger: 'blur' },
          { min: 4, message: '位数不正确', trigger: 'blur' }
        ],
        mobileCode: [
          { required: true, message: '请输入手机验证码', trigger: ['blur', 'change'] },
          { min: 6, max: 6, message: '位数不正确', trigger: ['blur', 'change'] }
        ],
        nickName: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          { min: 2, max: 12, message: '昵称长度在 2 到 12个字符', trigger: 'change' }
        ],
        email: [{
          validator: (rule, value, callback) => {
            const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
            if (!value) {
              this.emailValidator = false
              return callback(new Error('邮箱不能为空'))
            }
              if (mailReg.test(value)) {
                this.emailValidator = true
                callback()
              } else {
                this.emailValidator = false
                callback(new Error('请输入正确的邮箱格式'))
              }
          },
          trigger: ['blur', 'change']
        },
        ],
        mobile: [
          {
            validator: (rule, value, callback) => {
              const phoneReg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/

              if (!value) {
                this.isValidateMobile = false
                return callback(new Error('电话号码不能为空'))
              }
              if (phoneReg.test(value)) {
                  this.isValidateMobile = true
                  callback()
                } else {
                  this.isValidateMobile = false
                  callback(new Error('请输入正确的电话号码'))
                }
            },
            trigger: ['blur', 'change']
          },
        ]
      }
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
    newLogin () {
      this.confirm('登录凭证失效，请从新登录', "warning", () => {
        this.$router.replace('/user/login')
      });
    },
    confirm (messgae, type = "warning", callback) {
      this.$alert(messgae, '温馨提示', {
        confirmButtonText: '确定',
        type,
        callback
      });
    },
    prompt(message,callback) {
      this.$confirm(message, '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        closeOnClickModal: false,
        type: 'warning'
      }).then(callback).catch(() => {
        this.$message({
          type: 'success',
          message: '您是对的，三思而后行',
          duration:1000
        });
      });
    }
  }
};
export default rulesMixin;
