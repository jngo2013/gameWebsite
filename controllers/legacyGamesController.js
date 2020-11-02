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
}
