const { Legacy } = require('../models');

module.exports = {
  getAllLegacyGames: (req, res) => {
    // res.send("you reached the route");
    console.log("you reached the get all legacy games function!");
    Legacy.find({})
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  }, 
  getOneLegacyGame: (req, res) => {
    console.log("you reached the getOneLegacyGame function!");
    // get the game id (from the url using 'req.params.id')
    let gameId = req.params.id;
    
    // use the gameId to look through the database for the game
    Legacy.findById(gameId)
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateLegacyGame: (req, res) => {
    console.log("you reached the legacygames put route!");
    // get the game id (from the url using 'req.params.id')
    let gameId = req.params.id;

    // get the updated game data (using req.body.gameData)
    let gameData = req.body.gameData;
    // use mongoose to findbyid and update
    Legacy.findByIdAndUpdate(gameId, gameData, { new: true } )
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
