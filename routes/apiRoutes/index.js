const router = require("express").Router();
const legacyGames = require('./legacyGames');

// "/api" prepended here
// legacy games route
router.use("/legacygames", legacyGames);

module.exports = router;