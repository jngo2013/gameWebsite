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
  updateAllEvents: function(req, res) {
    console.log("you've reached the event carousel PUT request!");
    
    // get the updated data from the front end (using req.body.carouselData)
    let carouselData = req.body.carouselData;

    // use mongoose to update
    EventCarousel.updateOne(carouselData)
      .then(() => {
        console.log(carouselData, "line 24");
        res.json(carouselData);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getEventData: function(req, res){
    console.log("you reached the wildcard carousel route!");

    // get the carousel id (using req.params.id)
    let carouselId = req.params.id;

    // use the carousel id to find the event data
    EventCarousel.findById(carouselId)
      .then(carousel => {
        res.json(carousel);
        console.log(carousel, "line42")
      })
      .catch(err => {
        console.log(err);
      });
  }
}


// create a function for the GET request
  // 1. get the form data from the database
  // 2. send it back to the front end where it will be rendered