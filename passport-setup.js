
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(err, user);
});


passport.use(new GoogleStrategy({
  clientID: "133821515028-725827kcclgjhkcm68t21mo05bi9rq2i.apps.googleusercontent.com",
  clientSecret: "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",
  callbackURL: "http://localhost:3000/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  // use the profile info (mainly profile id) to check if the user is registered in your database
    return done(null, profile);
  }));
