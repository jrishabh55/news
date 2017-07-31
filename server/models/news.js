const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;
const connection = require('../connection');

const NewsSchema = new Schema({
  title: {type: [String], required: true, lowercase: true},
  desc: {type: [String], required: true},
  author: {type: [String], required: true, lowercase: true},
  created_at: {type: Date, default: Date.now()},
  hidden: {type: Boolean, default: false},
  thumbnail: {
    url1 : {type: [String], required: true},
    url2 : {type: [String], required: false},
    url3 : {type: [String], required: false},
  },
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

NewsSchema.methods.findByAuthor = function (author) {
  return this.model('News').find({author: author});
};

NewsSchema.methods.findByCategory = function (category) {
  return this.model('News').find({category: category});
};

NewsSchema.methods.findByCategoryName = function (category) {
  this.model('News').find({name: category});
  return this.model('News').find({category: category});
};

module.exports = mongoose.model('News', NewsSchema);
