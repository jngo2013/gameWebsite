const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LegacyGameSchema = new Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required:true,
  },
  time:{
    type:Number,
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
})

const Legacy = mongoose.model('Legacy', LegacyGameSchema);

module.exports = Legacy;
