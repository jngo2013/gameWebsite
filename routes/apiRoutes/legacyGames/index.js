// will have the functions that make an API call to the backend (import functions from controller)
const router = require("express").Router();
const { getAllLegacyGames } = require('./../../../controllers/legacyGamesContoller');

// route reached here: "/api/legacygames/"
router.get("/", getAllLegacyGames);

module.exports = router;