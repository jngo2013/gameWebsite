const router = require('express').Router();
const {addCalEvent,getAllCalEvents} = require("../../../controllers/calendarController")

router.post("/", addCalEvent)
router.get("/", getAllCalEvents)
// router.post('/', () => console.log('this is the calendar route'))

module.exports = router;