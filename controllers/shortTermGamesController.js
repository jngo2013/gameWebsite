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
  deleteShortTermGame: (req, res) => {
    console.log("you reached the deleteShortTermGame function!");
    // get the game id (from the url using req.params.id)
    let gameId = req.params.id;
    
    // use mongoose to findbyid and delete
    Short.findByIdAndDelete(gameId)
      .then(game => {
        // respond back with the deleted game
        res.json(game);
        console.log(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  addShortTermGame: (req, res) => {
    console.log("you reached the addShortTermGame function!");
    // 1. get the data from the front end
    // console.log(req.body, "line 64");
    const { body } = req;
    // 2. create a new document instance to be entered into the database
    let newShortTermGame = new Short(body);
    // 3. save the model to the database and respond with json
    newShortTermGame.save({})
      .then(shortTermGame => {
        console.log(shortTermGame, "game saved!");
        res.json(shortTermGame);
      })
      .catch(err => {
        console.log(err);
      });
  },
}