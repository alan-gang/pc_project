const { db } = require('../util/send');
const mongoose = require("mongoose");

const sidebarSchema = new mongoose.Schema({
  "title": { type: String, required: true },
  "contentList": [
    {
      icon: { type: String, required: true },
      title: { type: String, required: true },
      linkUrl: { type: String, required: true },
      lists: [
        {
          icon: { type: String },
          title: { type: String },
        }
      ]
    }
  ]
})

const sidebarModel = db('pc').model("sidebar_lists", sidebarSchema)

module.exports = {
  sidebarModel
}
