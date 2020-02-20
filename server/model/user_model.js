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
  "mobile": { tyle: String }
})


const userMode = db('pc').model("user_lists", userSchema)

module.exports = {
  userMode
}
