const router = require('koa-router')()
const { classListModel } = require('../../../model/classModel')
const jwt = require('koa-jwt')({ secret: 'hangang' });

// 获取班级列表
router.get('/getClassNameLists', jwt, async ctx => {

  let classLists = await classListModel.find()
  ctx.body = ctx.state.sendFrontEnd({
    classLists
  })
})

module.exports = router
