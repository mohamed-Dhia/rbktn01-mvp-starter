var express = require("express");
var data = require("../database-mongo");
const bcrypt = require("bcryptjs");
const path = require("path");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(__dirname + "/../react-client/dist"));

app.post("/signUp", (req, res) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  var user = {
    userName: req.body.userName,
    password: hash,
    watchLater: []
  };
  data.save(user, error => {
    if (error) throw error;
    res.sendStatus(201);
  });
});
app.post("/logIn", (req, res) => {
  data.findUser(req.body.userName, (err, doc) => {
    if (err) throw err;
    if (!doc.length) {
      console.log("not found in the data base");
      res.sendStatus(404);
    } else {
      bcrypt.compare(req.body.password, doc[0]._doc.password, (err, result) => {
        if (err) throw err;
        if (result) {
          console.log("match");
          res.sendStatus(200);
        } else {
          console.log("nope");
          res.sendStatus(404);
        }
      });
    }
  });
});
app.post("/watchLater", (req, res) => {
  data.findUser(req.body.userName, (err, doc) => {
    if (!doc.length) {
      console.log("not found in the data base");
      res.sendStatus(404);
    } else {
      res.send(doc[0]._doc.watchLater);
    }
  });
});
app.post("/add", (req, res) => {
  data.findUser(req.body.userName, (err, doc) => {
    if (err) throw err;
    axios
      .get(`https://https://api.jikan.moe/v3/anime/${res.body.animeId}`)
      .then(res => {
        doc[0]._doc.watchLater = doc[0]._doc.watchLater.concat(res);
        doc[0].save().then(res => console.log("hi"));
      });
  });
});

app.listen(3000, function() {
  console.log("listening on port 3000!");
});
