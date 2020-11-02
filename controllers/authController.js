const { User } = require("../models");
const { secret } = require("../config");
const jwt = require("jwt-simple");
const { isEmail, isLength } = require("validator");

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({ sub: user._id, iat: timeStamp }, secret);
}

module.exports = {
  signUp: async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "You must provide email and password" });
    }
    if (!isEmail(email)) {
      return res
        .status(403)
        .json({ error: "You must provide a valid email address" });
    }
    if (!isLength(password, { min: 6 })) {
      return res
        .status(403)
        .json({ error: "Your password must be at least 6 characters long" });
    }
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(403).json({ error: "User already exists" });
      }
      const user = await new User({
        email,
        password,
      }).save();
      return res.json({ token: tokenForUser(user) });
    } catch (e) {
      return res.status(403).json({ e });
    }
  },
  signIn: (req, res) => res.json({ token: tokenForUser(req.user) }),
}