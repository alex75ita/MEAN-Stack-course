var mongoose = require("mongoose");
var schemas = require("./schemas");

var User = mongoose.model("User", schemas.UserSchema, "users" /*collection name*/);

module.exports = User;
