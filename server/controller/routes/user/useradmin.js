const router = require('koa-router')()
const { userMode } = require('../../../model/user_model')
const { generateToken, genertaePassword, analysisPassword } = require('../../../util/user')
const fs = require('fs')
const path = require('path')
const jwt = require('koa-jwt')({ secret: 'hangang' });

// 用户登录
router.post('/loginUser', async ctx => {
    let { password, name, accountName } = ctx.request.body;
    let obj = accountName ? { accountName } : { email: name }
    let user = await userMode.findOne(obj)
    if (!user) {
        ctx.body = ctx.state.sendFrontEnd(null, '该用户还未注册')
        return
    } else {
        let checkStatus = await analysisPassword(password, user.password)
        if (!checkStatus) {
            ctx.body = ctx.state.sendFrontEnd(null, '密码错误')
            return
        } else {
            let token = await generateToken(user)
            user.password = password
            ctx.session.user = user;
            ctx.session.token = token
            ctx.body = ctx.state.sendFrontEnd({
                token,
                msg: '登录成功',
                user: user
            })
        }
    }
})

// 用户注册
router.post('/register', async ctx => {
    let { password, identity, email, code } = ctx.request.body;
    if (code != ctx.session.code) {
        ctx.body = ctx.state.sendFrontEnd(null, '对不起，验证码不正确')
        return
    }
    // let hasEmail = await userMode.findOne({ email })
    if (ctx.session.email != email) {
        ctx.body = ctx.state.sendFrontEnd(null, '对不起，邮箱错误')
        return
    }
    password = await genertaePassword(password)
    let saveStatus = await userMode.create({ password, email, identity })
    let token = await generateToken(saveStatus);
    saveStatus.password = password
    ctx.session.user = saveStatus;
    ctx.session.token = token
    ctx.body = ctx.state.sendFrontEnd({
        token,
        msg: '注册成功',
        user: saveStatus
    })
})

/*重置密码 */
router.post("/resetPasswords", async ctx => {
    let { password, email } = ctx.request.body
    password = await genertaePassword(password)
    let updateStatus = await userMode.updateOne({ email }, { password })
    if (updateStatus.n > 0) {
        ctx.body = ctx.state.sendFrontEnd({ msg: '恭喜你，修改密码成功' })
    }
})

/* 用户退出 */
router.post('/signOut', jwt, async ctx => {
    ctx.session.user = null
    ctx.session.token = null
    ctx.body = ctx.state.sendFrontEnd({ msg: '退出成功' })
})

/* 服务端数据获取 */

router.get('/initUser', jwt, async ctx => {
    ctx.body = ctx.state.sendFrontEnd({ user: ctx.session.user })
})


// 修改并添加用户信息
router.post("/updateUser", jwt, async ctx => {
    let _id = ctx.state.user._id
    let obj = ctx.request.body

    if (obj.password) {
        let status = await analysisPassword(obj.password, ctx.state.user.password)
        if (!status) {
            ctx.body = ctx.state.sendFrontEnd(null, '对不起，原密码错误')
            return
        } else {
            obj.password = await genertaePassword(obj.newPassword)
            delete obj.newPassword
        }
    }
    
    let result = await userMode.findOneAndUpdate({ _id }, { $set: obj }, {
        new: true,
        upsert: true
    })

    ctx.session.user = result
    let token = await generateToken(result)
    ctx.session.token = token
    ctx.body = ctx.state.sendFrontEnd({ msg: '恭喜你，修改成功', token, user: result })
})


module.exports = router
