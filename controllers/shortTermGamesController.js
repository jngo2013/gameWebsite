const { Short } = require('./../models');

module.exports = {
  getAllShortTermGames: (req, res) => {
    // res.send("you reached the shorts route!");
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
  }
}