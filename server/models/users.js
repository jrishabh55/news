const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');

const UsersSchema = new Schema({
  name: {type: [String], required: true},
  username: {type: [String], required: true, unique: true, lowercase: true},
  email: {type: [String], required: true, unique: true, lowercase: true},
  password: {type: String, required: true},
  activated: {type: [Boolean], default: false},
  access_token: {type: [String], unique: true},
  created_at: {type: Date, default: Date.now()},
  reference: {type: [String]}
});


autoIncrement.initialize(connection);
UsersSchema.plugin(autoIncrement.plugin, 'User');

const User = module.exports = mongoose.model('User', UsersSchema);

module.exports.findById = function (id, callback) {
  return User.find({_id: id}, callback);
};

module.exports.findByUsername = function (username, callback) {
  return User.find({username: username}, callback);
};

module.exports.findByEmail = function (email, callback) {
  return User.find({email: email}, callback);
};

module.exports.comparePass = (provided_password, comparable_password, cb) => {
  return cb(null, provided_password === comparable_password);
};
