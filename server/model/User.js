const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String },
  added_on: { type: Date, default: Date.now }
})

const Users = mongoose.model("user", userSchema);
module.exports = Users;