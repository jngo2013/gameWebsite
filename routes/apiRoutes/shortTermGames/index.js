const { response } = require("express");
const router = require("express").Router();

// functions from the shortTermGamesController
const { getAllShortTermGames, getOneShortTermGame } = require('./../../../controllers/shortTermGamesController');

// route reached here: "/api/shorttermgames/"
router.get("/", getAllShortTermGames);

// route reached here: "/api/shorttermgames/:id"
router.route("/:id")
  .get(getOneShortTermGame)

module.exports = router;