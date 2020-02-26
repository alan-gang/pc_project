const { db } = require('../util/send');
const mongoose = require("mongoose");

const classListSchema = new mongoose.Schema({
  "label": { type: String, required: true },
  "value": { type: String, required: true },
  "children": { type: Array, required: true }
})

const classListModel = db('pc').model("class_lists", classListSchema)

module.exports = {
  classListModel
}
