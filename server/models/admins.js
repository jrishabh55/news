const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');

const AdminSchema = new Schema({
  name: {type: [String], required: true},
  username: {type: [String], required: true, unique: true},
  email: {type: [String], required: true, unique: true},
  created_at: {type: Date, default: Date.now()},
  access_level: {
    admin: {type: [Boolean], default: true}
  }
});

autoIncrement.initialize(connection);
AdminSchema.plugin(autoIncrement.plugin, 'Admin');

module.exports = mongoose.model('Admin', AdminSchema);

AdminSchema.methods.findById = function (id) {
  return this.model('Admin').find({_id: id});
};
