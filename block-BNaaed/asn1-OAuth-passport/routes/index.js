var express = require("express");
var router = express.Router();
var passport = require("passport");
var GitHubStrategy = require("passport-github").Strategy;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/success", function (req, res, next) {
  res.render("success");
});
router.get("/failure", function (req, res, next) {
  res.render("fail");
});
router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/failure" }),
  (req, res) => {
    res.redirect("/success");
  }
);
module.exports = router;
