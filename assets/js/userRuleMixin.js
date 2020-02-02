let rulesMixin = {
    data() {
        return {
            rules: {
                name: [
                     { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15个字符', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'blur' }
                ],
                email: [
                  {
                    validator : (rule, value, callback) => {
                      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
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
                    trigger:'blur'
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
                ]
            }
        }
    },
    methods: {
        alert(message, type = "warning", duration = 1000) {
            this.$message({
                message,
                type,
                duration
            });
        }
    }

};
export default rulesMixin;
