// will have the functions that make an API call to the backend (import functions from controller)
const router = require("express").Router();

// functions from the LegacyGamesController
const { getAllLegacyGames, getOneLegacyGame } = require('./../../../controllers/legacyGamesController');

// route reached here: "/api/legacygames/"
router.get("/", getAllLegacyGames);

// route reached here: "/api/legacygames/:id"
router.route("/:id")
  .get(getOneLegacyGame)

module.exports = router;