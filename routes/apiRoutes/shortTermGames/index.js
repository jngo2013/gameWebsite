const { response } = require("express");
const router = require("express").Router();

// functions from the shortTermGamesController
const { getAllShortTermGames, getOneShortTermGame, updateShortTermGame, deleteShortTermGame, addShortTermGame } = require('./../../../controllers/shortTermGamesController');

// route reached here: "/api/shorttermgames/"
// router.get("/", getAllShortTermGames);

router.route("/")
  .get(getAllShortTermGames)
  .post(addShortTermGame)

// route reached here: "/api/shorttermgames/:id"
router.route("/:id")
  .get(getOneShortTermGame)
  .put(updateShortTermGame)
  .delete(deleteShortTermGame)

module.exports = router;