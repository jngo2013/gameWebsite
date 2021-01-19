const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventCarouselSchema = new Schema({
  slide1: {
    type: String,
    required: true
  },
  slide1desc: {
    type: String,
    required: true
  },
  slide1src: {
    type: String,
    required: true
  },
  slide1link: {
    type: String,
    required: true
  },
  slide2: {
    type: String,
    required: true
  },
  slide2desc: {
    type: String,
    required: true
  },
  slide2src: {
    type: String,
    required: true
  },
  slide2link: {
    type: String,
    required: true
  },
  slide3: {
    type: String,
    required: true
  },
  slide3desc: {
    type: String,
    required: true
  },
  slide3src: {
    type: String,
    required: true
  },
  slide3link: {
    type: String,
    required: true
  }
});

const EventCarousel = mongoose.model('Event', EventCarouselSchema);

module.exports = EventCarousel;