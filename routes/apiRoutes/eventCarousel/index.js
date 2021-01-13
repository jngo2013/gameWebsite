const router = require("express").Router();

// functions from the eventCarouselController
const { getAllEvents, updateAllEvents, getEventData } = require ('./../../../controllers/eventCarouselController');

// route reached here: "/api/eventcarousel"
router.route("/")
  .get(getAllEvents)
  .put(updateAllEvents)

router.get("/:id", getEventData)

module.exports = router;

// ===== TASKS =====

// create a function for editing (PUT request)