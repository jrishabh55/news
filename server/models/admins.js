const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');

const AdminSchema = new Schema({
  name: {type: [String], required: true, lowercase: true},
  username: {type: [String], required: true, unique: true, lowercase: true},
  password: {type: String, required: true},
  activated: {type: [Boolean], default: false},
  email: {type: [String], required: true, unique: true, lowercase: true},
  created_at: {type: Date, default: Date.now()},
  access_level: {
    admin: {type: [Boolean], default: true}
  }
});

autoIncrement.initialize(connection);
AdminSchema.plugin(autoIncrement.plugin, 'Admin');
const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.byId = (id, callback) => {
  return Admin.findOne({_id: id}, callback);
};

module.exports.byUsername = (username, callback) => {
  return Admin.findOne({username: username}, callback);
};

module.exports.byEmail = (email, callback) => {
  return Admin.findOne({email: email}, callback);
};

module.exports.comparePass = (provided_password, comparable_password, cb) => {
  return cb(null, provided_password === comparable_password);
};
