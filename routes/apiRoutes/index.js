const router = require("express").Router();
const legacyGames = require('./legacyGames');
const shortTermGames = require('./shortTermGames');
const adminRoutes = require('./adminRoutes');
const authRoutes = require ('./authRoutes')
// "/api" prepended here
// legacy games route
router.use("/legacygames", legacyGames);

// short term games route
router.use("/shorttermgames", shortTermGames);

// log in for admin
router.use('/admin', adminRoutes);

router.use('/auth', authRoutes);

module.exports = router;