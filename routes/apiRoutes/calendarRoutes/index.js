const router = require('express').Router();
const {addCalEvent} = require("../../../controllers/calendarController")

// router.post("/", addCalEvent)
router.post('/', () => console.log('this is the calendar route'))

module.exports = router;