const router = require("express").Router();

// functions from the eventCarouselController
const { getAllEvents } = require ('./../../../controllers/eventCarouselController');

// route reached here: "/api/eventcarousel"
router.get("/", getAllEvents );

module.exports = router;

// ===== TASKS =====

// create a function for editing (PUT request)