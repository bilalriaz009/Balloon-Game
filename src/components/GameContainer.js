import React, { Component } from "react";
import Balloon from "./Balloon";
import "../GameContainer.css";
class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 30,
      balloons: [],
      score: 0,
      sum: 0,
    };
  }
  //scoring method
  scoreMaking = (random, index) => {
    let myBalloons = this.state.balloons;
    myBalloons[index] = null;
    let count = 0;
    for (let i = 0; i < this.props.numOfBalloons; i++) {
      if (myBalloons[i] == null) {
        count++;
      } else {
        count = count;
      }
    }
    //check if user has exploded all balloons
    if (count == this.props.numOfBalloons) {
      this.setState({ time: 0 });
    }

    //score making code
    this.setState((prevState) => {
      return {
        score: prevState.score + random,
      };
    });
  };
  componentDidMount() {
    //timer
    setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      });
    }, 1000);

    for (let i = 0; i < this.props.numOfBalloons; i++) {
      let randomNumber = Math.floor(Math.random() * (31 - 5)) + 5;
      this.setState((prevState) => {
        return {
          sum: prevState.sum + randomNumber, //total sum of balloons numbers
        };
      });
      let index = i;
      this.state.balloons.push(
        <Balloon //balloon rendering component
          random={randomNumber}
          key={index}
          onClick={() => this.scoreMaking(randomNumber, index)}
        />
      );
    }
  }
  render() {
    return (
      <center>
        {this.state.time >= 0 ? (
          <div>
            <p
              className="display-4"
              style={{
                cursor: "context-menu",
                webkitUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
            >
              Time Remaining : {this.state.time} s
            </p>
            <div>{this.state.balloons}</div>
          </div>
        ) : (
          <div id="result">
            <h1>
              {this.state.score / this.state.sum >= 0.7 ? (
                <h3>
                  Congratulations {this.props.playerName}
                  <span className="winnerTitle">, You are Winner!</span>
                </h3>
              ) : (
                <h3>
                  Oops {this.props.playerName}
                  <span className="loserTitle">, Please Try Agian!</span>
                </h3>
              )}
            </h1>
          </div>
        )}
      </center>
    );
  }
}

export default GameContainer;
