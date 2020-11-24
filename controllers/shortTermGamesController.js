const { Short } = require('./../models');

module.exports = {
  getAllShortTermGames: (req, res) => {
    console.log("you reached the getAllShortTermGames function!");
    Short.find({})
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getOneShortTermGame: (req, res) => {
    console.log("you reached the getOneShortTermGame function!");
    // get the gameId
    let gameId = req.params.id;
    
    // use the gameId to look through the database for the game
    Short.findById(gameId)
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      }); 
  },
  updateShortTermGame: (req, res) => {
    console.log("you reached the updateShortTermGame function!");
    // get the id from the front end from req.params
    let gameId = req.params.id;

    // get the data from the front end from req.body
    let gameData = req.body.gameData;

    // use mongoose to findByid and update ({ new: true } gives you back the updated data)
    Short.findByIdAndUpdate(gameId, gameData, { new: true })
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
}