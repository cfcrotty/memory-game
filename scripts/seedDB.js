const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Clicky collection and inserts the Clicky below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/clickyGame"
);

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

db.Clicky
  .remove({})
  .then(() => db.Clicky.collection.insertMany(friends))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
