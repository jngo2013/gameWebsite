const { Calendar } = require('../models');

module.exports = {
  addCalEvent: (req, res) => {
    const { body } = req;
    console.log(body)
    let newCalendarEvent = new Calendar(body);

    newCalendarEvent.save({})
    console.log("event saved calendar line 11")
  },

  getAllCalEvents: (req, res) => {
    console.log("you've received all calendar events");
    Calendar.find({})
      .then(cal => {
        res.json(cal);
        // console.log(cal)
      })
      .catch(err => {
        console.log(err);
      });
  }, 

  // () => console.log("this is the console for calendar")
}