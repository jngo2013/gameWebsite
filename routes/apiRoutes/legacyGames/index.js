// will have the functions that make an API call to the backend (import functions from controller)
const router = require("express").Router();

const { response } = require("express");
const Legacy = require("../../../models/LegacyGame");
// functions from the LegacyGamesController
const { getAllLegacyGames, getOneLegacyGame, updateLegacyGame, deleteLegacyGame } = require('./../../../controllers/legacyGamesController');

// route reached here: "/api/legacygames/"
router.get("/", getAllLegacyGames);

// route reached here: "/api/legacygames/:id"
router.route("/:id")
  .get(getOneLegacyGame)
  .put(updateLegacyGame)
  .delete(deleteLegacyGame)

module.exports = router;