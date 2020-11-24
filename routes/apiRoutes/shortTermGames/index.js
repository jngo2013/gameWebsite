const { response } = require("express");
const router = require("express").Router();

// functions from the shortTermGamesController
const { getAllShortTermGames, getOneShortTermGame, updateShortTermGame } = require('./../../../controllers/shortTermGamesController');

// route reached here: "/api/shorttermgames/"
router.get("/", getAllShortTermGames);

// route reached here: "/api/shorttermgames/:id"
router.route("/:id")
  .get(getOneShortTermGame)
  .put(updateShortTermGame)

module.exports = router;