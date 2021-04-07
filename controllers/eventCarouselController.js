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
    // get the updated date from the front end (using req.body)
    let { body } = req;
    
    // check to see if an image was uploaded; if not, don't update the image
    if(req.files.slide1src !== undefined) {
      body.slide1src = "/" + req.files.slide1src[0].path;
    }

    if(req.files.slide2src !== undefined) {
      body.slide2src = "/" + req.files.slide2src[0].path;
    }
    
    if(req.files.slide3src !== undefined) {
      body.slide3src = "/" + req.files.slide3src[0].path;
    }
    
    // use mongoose to update
    EventCarousel.updateOne(body)
      .then(() => {
        res.json(body);
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
