const router = require("express").Router();
const legacyGames = require('./legacyGames');
const shortTermGames = require('./shortTermGames');
const eventCarousel = require('./eventCarousel');
const adminRoutes = require('./adminRoutes');
const authRoutes = require ('./authRoutes');
const calendar = require('./calendarRoutes')

// "/api" prepended here
// legacy games route
router.use("/legacygames", legacyGames);

// short term games route
router.use("/shorttermgames", shortTermGames);

// eventCarousel routes
router.use("/eventcarousel", eventCarousel);

// log in for admin
router.use('/admin', adminRoutes);

router.use('/auth', authRoutes);

router.use('/calendar', calendar);

module.exports = router;