const { response } = require("express");
const router = require("express").Router();

// functions from the shortTermGamesController
const { getAllShortTermGames, getOneShortTermGame, updateShortTermGame, deleteShortTermGame, addShortTermGame, findShortTermGames } = require('./../../../controllers/shortTermGamesController');

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

// route reached here: "/api/shorttermgames/search/:game"
router.get("/search/:game", findShortTermGames);

module.exports = router;