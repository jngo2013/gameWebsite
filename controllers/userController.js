const { User, Legacy } = require ("../models/index");


module.exports = {
  getUserEmail: async (req, res) => {
    const { email } = req.query;
    try {
      const userEmail = await User.findOne({ email }, "email");
      return res.status(200).json(userEmail);
    } catch (e) {
      return res.status(403).json({ e });
    }
  }
}