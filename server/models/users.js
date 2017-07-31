const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');
const passportLocalMongoose = require('passport-local-mongoose');

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

UsersSchema.methods.findById = function (id) {
  return this.model('User').find({_id: id});
};

UsersSchema.methods.findByUsername = function (username) {
  return this.model('User').find({username: username});
};

UsersSchema.methods.findByEmail = function (email) {
  return this.model('User').find({email: email});
};

UsersSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', UsersSchema);
