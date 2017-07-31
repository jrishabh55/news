const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');

const AdminSchema = new Schema({
  name: {type: [String], required: true, lowercase: true},
  username: {type: [String], required: true, unique: true, lowercase: true},
  email: {type: [String], required: true, unique: true, lowercase: true},
  created_at: {type: Date, default: Date.now()},
  access_level: {
    admin: {type: [Boolean], default: true}
  }
});

autoIncrement.initialize(connection);
AdminSchema.plugin(autoIncrement.plugin, 'Admin');

AdminSchema.query.byId = function (id) {
  return this.find({_id: id});
};

AdminSchema.query.byUsername = function (username) {
  return this.find({username: username});
};

AdminSchema.query.byEmail = function (email) {
  return this.find({email: email});
};

module.exports = mongoose.model('Admin', AdminSchema);
