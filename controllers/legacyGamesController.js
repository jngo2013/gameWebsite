const { Legacy } = require('../models');
var mongoose = require('mongoose');

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
    
    // https://stackoverflow.com/questions/53686554/validate-mongodb-objectid
    // check to see if the gameId is a valid ObjectId using mongoose
    var isValid = mongoose.Types.ObjectId.isValid(gameId);

    // https://stackoverflow.com/questions/17223517/mongoose-casterror-cast-to-objectid-failed-for-value-object-object-at-path
    // check to see if the id is valid...
    if(isValid) {
      // if id is valid, run the database query
      console.log("id is valid!");
      Legacy.findById(gameId)
      .then(game => {
          // ...if it is check to see if the game exists; if it doesn't, return the data with "null"
          if(!game) {
            console.log("that game doesn't exist!");
            res.json(game);
          } else {
            // ...else return the game data
            console.log("Legacy game:", game);
            res.json(game);
          }   
      })
      .catch(err => {
        console.log(err);
      }); 
    // if id isn't valid, return with "null"  
    } else {
      console.log("id is not valid!");
      res.json(null);
    }
  },
  updateLegacyGame: (req, res) => {
    console.log("you reached the legacygames put route!");
    // get the game id (from the url using 'req.params.id')
    let gameId = req.params.id;

    // get the updated game data (using req.body.gameData)
    let gameData = req.body.gameData;
    // use mongoose to findbyid and update ({ new: true } gives you back the updated data)
    Legacy.findByIdAndUpdate(gameId, gameData, { new: true } )
      .then(game => {
        res.json(game);
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteLegacyGame: (req, res) => {
    console.log("you reached the legacygames delete route!");
    // get the game id (from the url using req.params.id)
    let gameId = req.params.id;

    // use mongoose to findbyid and delete
    Legacy.findByIdAndDelete(gameId)
      .then(game => {
        // respond back with the deleted game
        res.json(game);
        console.log(game);
      })
      .catch(err => {
        console.log(err);
      }); 
  },
  addLegacyGame: (req, res) => {
    // get information from the front end (req.body is already an object)
    const { body } = req;
    
    // add src to the body from multer
    body.src = "/" + req.file.path;  // <-- req.file.path contains the file info from the front end

    // create a new document instance to be entered in to the database
    let newLegacyGame = new Legacy(body);
    
    // save the model to the database
    newLegacyGame.save({})
      .then(legacyGame => {
        console.log(legacyGame, "game saved!");
        res.json(legacyGame);
      })
      .catch(err => {
        console.log(err);
      });
  },
  findLegacyGames: (req, res) => {
    console.log("you reached the search game route!");
    
    // Full text search using MongoDB and mongoose:  https://stackoverflow.com/questions/28775051/best-way-to-perform-a-full-text-search-in-mongodb-and-mongoose
    // search the database for that game
    Legacy.find({ $text: {$search: req.params.game}})
      .then(game => {
        res.json(game);
        console.log(game);
      })
      .catch(err => {
        console.log(err);
      }); 
  },
}
