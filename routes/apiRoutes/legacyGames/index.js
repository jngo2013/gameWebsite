// will have the functions that make an API call to the backend (import functions from controller)
const router = require("express").Router();

const { response } = require("express");

// functions from the LegacyGamesController
const { getAllLegacyGames, getOneLegacyGame, updateLegacyGame, deleteLegacyGame, addLegacyGame, findLegacyGames } = require('./../../../controllers/legacyGamesController');

// route reached here: "/api/legacygames/"
// router.get("/", getAllLegacyGames);

router.route("/")
  .get(getAllLegacyGames)
  .post(addLegacyGame)

// route reached here: "/api/legacygames/:id"
router.route("/:id")
  .get(getOneLegacyGame)
  .put(updateLegacyGame)
  .delete(deleteLegacyGame)

// route reached here: "/api/legacygames/search/:game"
router.get("/search/:game", findLegacyGames);

module.exports = router;