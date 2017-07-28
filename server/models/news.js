const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const connection = require('../connection');

const NewsSchema = new Schema({
  title: {type: [String], required: true},
  desc: {type: [String], required: true},
  author: {type: [String], required: true},
  created_at: {type: Date, default: Date.now()},
  hidden: {type: Boolean, default: false},
  thumbnail: {type: [String], required: true},
  credits: {type: [Number], default: 0},
  time: {type: [Number], required: true, default: 1000},
  category: {type: [Number], required: true},
  meta: {
    votes: Number,
    favs: Number
  },
});

autoIncrement.initialize(connection);
NewsSchema.plugin(autoIncrement.plugin, 'News');

module.exports = mongoose.model('News', NewsSchema);
