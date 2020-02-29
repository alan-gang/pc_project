const { db } = require('../util/send');
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const userSchema = new mongoose.Schema({
  "identity": { type: String, required: true },
  "email": { type: String, required: true },
  "password": { type: String, required: true },
  "avatar": { type: String, default: '' },
  "gender": { type: String, default: '1' },
  "classClassify": { type: String },
  "accountName": { type: String },
  "nickName": { type: String },
  "username": { type: String, default: '' },
  "mobile": { tyle: String },
  "marriage": { type: String, default: '2' },
  "dateBirth": { type: String },
  "graduationTime": { type: String },
  "address": { type: String },
  "currentAddress": { type: String },
  "enterScollTime": { type: String },
  "leaveSchollTime": { type: String },
  "className": { type: String },
  "wechat": { type: String },
  "qq": { type: String },
  'classLists': { type: Array }
})

const delUserSchema = new mongoose.Schema({
  "identity": { type: String },
  "email": { type: String },
  "password": { type: String },
  "avatar": { type: String },
  "gender": { type: String },
  "classClassify": { type: String },
  "accountName": { type: String },
  "nickName": { type: String },
  "username": { type: String, default: '' },
  "mobile": { tyle: String },
  "marriage": { type: String },
  "dateBirth": { type: String },
  "graduationTime": { type: String },
  "address": { type: String },
  "currentAddress": { type: String },
  "enterScollTime": { type: String },
  "leaveSchollTime": { type: String },
  "className": { type: String },
  "wechat": { type: String },
  "qq": { type: String },
  'classLists': { type: Array }
})


const userMode = db('pc').model("user_lists", userSchema)
const delUserMode = db('pc').model("del_user_lists", delUserSchema)

module.exports = {
  userMode,
  delUserMode
}
