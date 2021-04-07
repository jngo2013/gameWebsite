const { response } = require("express");
const router = require("express").Router();

// ===== MULTER SETUP - FOR UPLOADING FILES =====
const multer = require('multer');

// upload middleware from multer; this executes multer
const upload = multer({});
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
