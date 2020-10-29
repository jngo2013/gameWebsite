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
}