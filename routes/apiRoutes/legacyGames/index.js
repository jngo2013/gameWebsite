const { response } = require("express");

// will have the functions that make an API call to the backend (import functions from controller)
const router = require("express").Router();

// ===== MULTER SETUP - FOR UPLOADING FILES =====
// multer setup - for uploading files
const multer = require('multer');

// upload middleware from multer; this executes multer
const upload = multer({});
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

