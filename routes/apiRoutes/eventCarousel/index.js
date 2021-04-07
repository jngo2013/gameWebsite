const router = require("express").Router();

// ===== MULTER SETUP - FOR UPLOADING FILES =====
// multer setup - for uploading files
const multer = require('multer');

// upload middleware from multer; this executes multer
const upload = multer({});
// ===== END OF MULTER SETUP =====

// functions from the eventCarouselController
const { getAllEvents, updateAllEvents, getEventData } = require ('./../../../controllers/eventCarouselController');

// route reached here: "/api/eventcarousel"
router.route("/")
  .get(getAllEvents)
  .put(upload.fields([{ name: "slide1src" }, { name: "slide2src" }, { name: "slide3src" }]), updateAllEvents)

router.get("/:id", getEventData)

module.exports = router;
