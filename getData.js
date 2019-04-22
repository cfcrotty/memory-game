//https://clicky-game.netlify.com/assets/images/geometry.svg

// const axios = require("axios");

// axios.get("https://clicky-game.netlify.com/assets/images/geometry.svg").then(response => {
// console.log(response)

//     }).catch(error => {
//         console.log(error);
//     });

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  var arr = [2, 11, 37, 42];
  arr = shuffle(arr);
  console.log(arr);