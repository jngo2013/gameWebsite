const { response } = require("express");

const router = require("express").Router();
// require functions from shortTermGamesController (not yet made)
// function that will be made is "getAllShortTermGames"
const { getAllShortTermGames } = require('./../../../controllers/shortTermGamesController');

// route reached here: "/api/shorttermgames/"
router.get("/", getAllShortTermGames);

module.exports = router;