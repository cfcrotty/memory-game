import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import friends from "./friends.json";
import API from "./utils/API";

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    middleNav: "Click an image to begin!",
    classShake: "",
    classMiddle: ""
  };

  componentDidMount() {
    let newFriends = this.shuffle(friends);
    this.setState({ friends: newFriends });
    API.getBooks()
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }

  shuffle = array => {
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

  clickedFriend = id => {
    var incorrect = false;
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends1 = this.state.friends.map(friend => {
      if (friend.id === id) {
        if (friend.clicked) {
          incorrect = true;
          if (this.state.score>this.state.topScore) {
            this.setState({ topScore: this.state.score });
          }
          const friends2 = this.state.friends.map(frnd => {
            frnd.clicked = false;
          });
          this.setState({ friends: friends2, score: 0, middleNav: "You guessed incorrectly!", classMiddle: "incorrect" });
        } else {
          incorrect = false;
          friend.clicked = true;
          this.setState({ score: this.state.score+1, middleNav: "You guessed correctly!", classMiddle: "correct" });
        }
      }
      return friend;
    });
    if (incorrect) this.setState({ classShake: " shake", classMiddle: "incorrect" });
    else this.setState({ classShake: "", classMiddle: "correct" });
    setTimeout(()=>{
      this.setState({classMiddle: "" });
    },400)
    let newFriends=this.shuffle(friends1);
    this.setState({ friends: newFriends });
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav scores={`Score: ${this.state.score} | Top Score: ${this.state.topScore}`} brand="Clicky Game" middle={this.state.middleNav} classMiddle={this.state.classMiddle}></Nav>
        <Header h1="Clicky Game!" h2="Click on an image to earn points, but don't click on any more than once!"></Header>
        <main className="container">
          {
            this.state.friends.map(friend => (
            <FriendCard
              clickedFriend={this.clickedFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              classShake={this.state.classShake}
            />
          ))}
        </main>
        <Footer title="Clicky Game!" url="assets/images/react.svg"></Footer>
      </Wrapper>
    );
  }
}

export default App;
