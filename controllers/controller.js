const db = require("../models");
const axios = require("axios");

const friends = [
  {
    "theID": 1,
    "name": "evilmorty",
    "image": "assets/images/evilmorty.png",
    "clicked": false
  },
  {
    "theID": 2,
    "name": "mr",
    "image": "assets/images/mr.png",
    "clicked": false
  },
  {
    "theID": 3,
    "name": "jessica",
    "image": "assets/images/jessica.png",
    "clicked": false
  },
  {
    "theID": 4,
    "name": "meeseeks",
    "image": "assets/images/meeseeks.png",
    "clicked": false
  },
  {
    "theID": 5,
    "name": "beth",
    "image": "assets/images/beth.png",
    "clicked": false
  },
  {
    "theID": 6,
    "name": "goldenford",
    "image": "assets/images/goldenford.png",
    "clicked": false
  },
  {
    "theID": 7,
    "name": "gianthead",
    "image": "assets/images/gianthead.png",
    "clicked": false
  },
  {
    "theID": 8,
    "name": "jerry",
    "image": "assets/images/jerry.png",
    "clicked": false
  },
  {
    "theID": 9,
    "name": "rick",
    "image": "assets/images/rick.png",
    "clicked": false
  },
  {
    "theID": 10,
    "name": "birdperson",
    "image": "assets/images/birdperson.png",
    "clicked": false
  },
  {
    "theID": 11,
    "name": "summer",
    "image": "assets/images/summer.png",
    "clicked": false
  },
  {
    "theID": 12,
    "name": "morty",
    "image": "assets/images/morty.png",
    "clicked": false
  }
];

// Defining methods for the controller
module.exports = {
  findAll: function (req, res) {
    db.Clicky
      .find()
      .sort({ theID: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Clicky
      .create(friends)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
