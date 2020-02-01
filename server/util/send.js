const mongoose = require("mongoose");

module.exports = {
  sendFrontEnd (data, message) {
    if (data) {
      return {
        code: 0,
        data
      }
    } else {
      return {
        code: 1,
        message: message
      }
    }
  },
   db:(dbName) => {
    return mongoose.createConnection(`mongodb://123.56.119.225:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });
  }

}
