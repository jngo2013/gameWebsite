const { Calendar } = require('../models');

module.exports = {
  addCalEvent: 
  (req, res) => {
    const { body } = req;
    console.log(body)
    let newCalendarEvent = new Calendar(body);

    newCalendarEvent.save({})
    console.log("event saved calendar line 11")
  }
  // () => console.log("this is the console for calendar")
}