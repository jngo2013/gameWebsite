const { EventCarousel } = require('../models');

module.exports = {
  getAllEvents: function(req, res){
    console.log("you've reached the eventCarousel GET route!");

    EventCarousel.find({})
      .then(event => {
        res.json(event);
      })
      .catch(err => {
        console.log(err);
      });
  },
}


// create a function for the GET request
  // 1. get the form data from the database
  // 2. send it back to the front end where it will be rendered