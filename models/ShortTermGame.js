const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShortTermGameSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required:true,
  },
  time:{
    type:String,
    required:true,
  },
  players:{
    type:String,
    required:true,
  },
  drunkRules: {
    type: String,
    required: true,
  },
  realRules: {
    type: String,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
  drunkRating: {
    type: String,
    required: true,
  }
});

// Full text search using MongoDB and mongoose:  https://stackoverflow.com/questions/28775051/best-way-to-perform-a-full-text-search-in-mongodb-and-mongoose
ShortTermGameSchema.index({"$**": "text"});

const Short = mongoose.model('Short', ShortTermGameSchema);

module.exports = Short;
