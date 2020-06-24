var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  ip: String,
  location: String,
  time: String
});

mongoose.model("user", userSchema);

module.exports = mongoose.model("user");