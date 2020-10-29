const router = require("express").Router();
const legacyGames = require('./legacyGames');
const shortTermGames = require('./shortTermGames');

// "/api" prepended here
// legacy games route
router.use("/legacygames", legacyGames);

// short term games route
router.use("/shorttermgames", shortTermGames);

module.exports = router;