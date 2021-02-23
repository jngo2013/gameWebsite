const router = require("express").Router();

// ===== MULTER SETUP - FOR UPLOADING FILES =====
// multer setup - for uploading files
const multer = require('multer');

// storage strategy for files
// multer will execute these functions whenever a new file is received
const storage = multer.diskStorage({
  // destination defines where the incoming function will be stored
  // "cb" is a callback function
  destination: function(req, file, cb) {
    // in cb you pass a potential error, then the path where you want to store the file
    cb(null, './uploads/');
  },
  // filename defines how the file will be saved
  filename: function(req, file, cb) {
    // in cb you pass a potential error, then how you want to name the file
    cb(null, file.originalname);
  },
});

// upload middleware from multer; this executes multer
const upload = multer({storage: storage});

// ===== END OF MULTER SETUP =====

// functions from the eventCarouselController
const { getAllEvents, updateAllEvents, getEventData } = require ('./../../../controllers/eventCarouselController');

// route reached here: "/api/eventcarousel"
router.route("/")
  .get(getAllEvents)
  .put(upload.single("slide1src"), updateAllEvents)
  // .put(upload.fields([{ name: "slide1src", maxCount: 1}, { name: "slide2src", maxCount: 1}, { name: "slide3src", maxCount: 1}]), updateAllEvents)

router.get("/:id", getEventData)

module.exports = router;

// ===== TASKS =====

// create a function for editing (PUT request)