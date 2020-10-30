const router = require("express").Router();
const legacyGames = require('./legacyGames');
const shortTermGames = require('./shortTermGames');
const adminRoutes = require('./adminRoutes');
// "/api" prepended here
// legacy games route
router.use("/legacygames", legacyGames);

// short term games route
router.use("/shorttermgames", shortTermGames);

// log in for admin
router.use('/doga', adminRoutes)

module.exports = router;