const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employee = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = mongoose.model("mycollections", employee);
