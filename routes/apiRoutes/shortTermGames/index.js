const { response } = require("express");
const router = require("express").Router();

// ===== MULTER SETUP - FOR UPLOADING FILES =====
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


// functions from the shortTermGamesController
const { getAllShortTermGames, getOneShortTermGame, updateShortTermGame, deleteShortTermGame, addShortTermGame, findShortTermGames } = require('./../../../controllers/shortTermGamesController');

// route reached here: "/api/shorttermgames/"
router.route("/")
  .get(getAllShortTermGames)
  .post(upload.single("src"), addShortTermGame)

// route reached here: "/api/shorttermgames/:id"
router.route("/:id")
  .get(getOneShortTermGame)
  .put(upload.single("src"), updateShortTermGame)
  .delete(deleteShortTermGame)

// route reached here: "/api/shorttermgames/search/:game"
router.get("/search/:game", findShortTermGames);

module.exports = router;

// getting image upload to work
// https://www.youtube.com/watch?v=srPXMt1Q0nY
// https://stackoverflow.com/questions/56709353/how-to-send-a-file-image-from-react-to-node-js-server
// https://github.com/therj/file-upload-react/blob/master/src/App.js