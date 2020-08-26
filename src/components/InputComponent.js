import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import GameContainer from "./GameContainer";
class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      numOfBalloons: "",
      btnClicked: false,
      showInput: true,
      showContainer: false,
    };
  }

  //input handle method
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  //form submission method
  handleSubmit = (event) => {
    const { name } = event.target;
    let numOfBalloons = this.state.numOfBalloons;
    let playerName = this.state.playerName;

    //input validation
    if (playerName == "") {
      alert("Please Enter Your Name");
      event.preventDefault();
    }
    if (numOfBalloons < 10 || numOfBalloons > 25) {
      alert("Minimum number of balloons should be 10 and maximum should be 25");
      this.setState({
        [name]: "",
      });
      event.preventDefault();
    } else if (playerName != "" && numOfBalloons >= 10 && numOfBalloons <= 25) {
      this.setState({
        btnClicked: true,
        showInput: false,
        showContainer: true,
      });
      event.preventDefault();
    }
  };
  render() {
    if (this.state.showInput) {
      return (
        <div id="form" style={{ marginTop: "8%" }}>
          <Container>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Row>
                  <Col sm="3">
                    <Label for="playerName" className="lead">
                      Player Name
                    </Label>
                  </Col>
                  <Col sm="6">
                    <Input
                      type="playerName"
                      name="playerName"
                      id="playerName"
                      value={this.state.playerName}
                      placeholder="Enter your name..."
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col sm="3">
                    <Label for="numOfBalloons" className="lead">
                      Number of Balloons
                    </Label>
                  </Col>
                  <Col sm="6">
                    <Input
                      type="number"
                      name="numOfBalloons"
                      id="numOfBalloons"
                      value={this.state.numOfBalloons}
                      placeholder="Enter a number between 10 and 25"
                      onChange={this.handleChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <Col md="3"></Col>
                <Col md="4">
                  <Button block className="btn btn-danger">
                    <strong>START!</strong>
                  </Button>
                </Col>
              </Row>
            </form>
            <Row>
              <Col className="lead">
                <div style={{ marginTop: "5%" }}>
                  <em>
                    <strong>Instructions: </strong>Enter your name and number of
                    balloons. Then you have to explode as many balloons as you
                    can in 30 seconds. If your socre is above 70%, you will be
                    the winner!
                  </em>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else if (this.state.showContainer) {
      return (
        <GameContainer
          playerName={this.state.playerName}
          numOfBalloons={this.state.numOfBalloons}
        />
      );
    }
  }
}

export default InputComponent;
