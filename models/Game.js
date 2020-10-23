const { Schema, model} = require('mongoose');

const GameSchema = new Schema({
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
  }
})

module.exports = model ('Game' , GameSchema);
