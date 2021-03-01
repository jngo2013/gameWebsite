const mongoose = require('mongoose');
const {Schema, model}= mongoose;

const CalendarSchema = new Schema ({
  title: {
    type: String
  },
  start: {
    type: String
  },
  end: {
    type: String
  },
  allDay: {
    type: String
  }


  
})

module.exports = model('Calendar', CalendarSchema);