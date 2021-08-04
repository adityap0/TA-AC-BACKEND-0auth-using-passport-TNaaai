var passport = require("passport");
var GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "de112d2db8b2ba02b63a",
      clientSecret: "d48a73c9514672bacc994edd00b484804952daf9",
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      var profileData = {
        name: profile.username,
        email: "chilly@mail.com",
        avatar: profile._json.avatar_url,
      };
    }
  )
);
