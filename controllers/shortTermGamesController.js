const { Short } = require('./../models');
var mongoose = require('mongoose');

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
    
    // https://stackoverflow.com/questions/53686554/validate-mongodb-objectid
    // check to see if the gameId is a valid ObjectId using mongoose
    var isValid = mongoose.Types.ObjectId.isValid(gameId);

    // https://stackoverflow.com/questions/17223517/mongoose-casterror-cast-to-objectid-failed-for-value-object-object-at-path
    // check to see if the id is valid...
    if(isValid) {
      // if id is valid, run the database query
      console.log("id is valid!");
      Short.findById(gameId)
      .then(game => {
          // ...if it is check to see if the game exists; if it doesn't, return the data with "null"
          if(!game) {
            console.log("that game doesn't exist!");
            res.json(game);
          } else {
            // ...else return the game data
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
  updateShortTermGame: (req, res) => {
    console.log("you reached the updateShortTermGame function!");
    // get the id from the front end from req.params
    let gameId = req.params.id;

    // deconstruct the data from the front end
    let { body } = req;

    // get the path for the file from the front end and add it to body
    // body.src = "/" + req.file.path;

    // check to see if a new file was uploaded; if not, use the path of the previous image
    req.file !== undefined ? body.src = "/" + req.file.path : console.log("No image was uploaded");

    // use mongoose to findByid and update ({ new: true } gives you back the updated data)
    Short.findByIdAndUpdate(gameId, body, { new: true })
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

    // add src to the body from multer
    body.src = "/" + req.file.path;  // <-- req.file.path contains the file info from the front end
    
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
  findShortTermGames: (req, res) => {
    console.log("you reached the findShortTermGames function!");

    // Full text search using MongoDB and mongoose:  https://stackoverflow.com/questions/28775051/best-way-to-perform-a-full-text-search-in-mongodb-and-mongoose
    // search the database for that game
    Short.find({ $text: {$search: req.params.game} })
      .then(game => {
        res.json(game);
        console.log(game);
      })
      .catch(err => {
        console.log(err);
      }); 
  }
}