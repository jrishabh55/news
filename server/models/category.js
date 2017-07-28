const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");
const Schema = mongoose.Schema;
const connection = require('../connection');

const CategorySchema = new Schema({
  name: {type: [Number], required: true},
  meta: {type: [String], required: true},
});

autoIncrement.initialize(connection);
CategorySchema.plugin(autoIncrement.plugin, 'Category');
module.exports = mongoose.model('Category', CategorySchema);
