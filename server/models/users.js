const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');

const UsersSchema = new Schema({
  name: {type: [String], required: true},
  username: {type: [String], required: true},
  email: {type: [String], required: true, unique: true},
  activated: {type: [Boolean], default: false},
  access_token: {type: [String], unique: true},
  created_at: {type: Date, default: Date.now()},
  reference: {type: [String]}
});


autoIncrement.initialize(connection);
UsersSchema.plugin(autoIncrement.plugin, 'User');

module.exports = mongoose.model('User', UsersSchema);
