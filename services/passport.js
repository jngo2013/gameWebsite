const passport = require ('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');
const { secret } = require ('../config');
// const User = require ('../models/User');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
};

const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await user.findById(payload.sub).select('-password');
    if (!user) {
      return done(null, false);
    }
    return done(null, false);
  } catch (e) {
    return done (e, false);
  }
});

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
  try{
    const user = await User.findOne({ email });
    if (!user) { return done(null, false);}
    const isMatch = await user. comparePassword(password);
    if(!isMatch) { return done(null, false); }
    return done(null, user);
  } catch (e) {
    return done (e);
  }
});

passport.use(jwtLogin);
passport.use(localLogin);