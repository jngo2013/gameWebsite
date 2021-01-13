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
  }
});

const Short = mongoose.model('Short', ShortTermGameSchema);

module.exports = Short;
