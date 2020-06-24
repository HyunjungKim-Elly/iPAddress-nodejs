var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());

var user = require("./user");

var createUser = function (userData) {
  return new Promise(function (res, rej) {
    if (userData === "") {
      rej("There is no data")
    } else {
      user.create({
        ip: userData.ip,
        location: userData.location,
        time: userData.time
      })
      res(userData.ip + " " + userData.location + " " + userData.time);
    }
  })
}
//create user
router.post("/send", function (req, res) {
  createUser(req.body)
    .then((user) => {
      res.status(200).render("../views/send.ejs", {
        msg: "Congratulation! your data is added",
        user: user
      });
    }).catch(err => {
      console.log(err)
      return res.status(500).send("failed to create a user");
    })



});


module.exports = router;