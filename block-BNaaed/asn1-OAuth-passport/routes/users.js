var express = require("express");
var router = express.Router();
var User = require("../models/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/signup", function (req, res, next) {
  res.render("signup");
});
router.post("/signup", function (req, res, next) {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
