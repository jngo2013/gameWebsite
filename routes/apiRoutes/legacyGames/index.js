const { response } = require("express");

// will have the functions that make an API call to the backend (import functions from controller)
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

// image type filter
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/bmp' || file.mimetype === 'image/gif' || file.mimetype === 'image/png' || file.mimetype === 'image/tiff') {
    // if image is jpeg, bmp, gif, png, or tiff, accept it
    cb(null, true);
  } else {
    // else reject it and not store it
    cb(null, false);  
  }
}

// upload middleware from multer; this executes multer
const upload = multer({
  storage: storage, 
  // fileFilter
  fileFilter: fileFilter,
});

// ===== END OF MULTER SETUP =====


// functions from the LegacyGamesController
const { getAllLegacyGames, getOneLegacyGame, updateLegacyGame, deleteLegacyGame, addLegacyGame, findLegacyGames } = require('./../../../controllers/legacyGamesController');

// route reached here: "/api/legacygames/"
router.route("/")
  .get(getAllLegacyGames)
  .post(upload.single("src"), addLegacyGame) // <--- add multer middleware before adding a game

// route reached here: "/api/legacygames/:id"
router.route("/:id")
  .get(getOneLegacyGame)
  .put(upload.single("src"), updateLegacyGame)
  .delete(deleteLegacyGame)

// route reached here: "/api/legacygames/search/:game"
router.get("/search/:game", findLegacyGames);

module.exports = router;

// getting image upload to work
// https://www.youtube.com/watch?v=srPXMt1Q0nY
// https://stackoverflow.com/questions/56709353/how-to-send-a-file-image-from-react-to-node-js-server
// https://github.com/therj/file-upload-react/blob/master/src/App.js
