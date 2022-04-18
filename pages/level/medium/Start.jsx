import React from "react";
import Button from "../../../components/Button";

class Start extends React.Component {
  clicked = () => {
    this.props.startPressed();
  };
  
  render() {
    return (
      <div className="start">
        <div className="App-brandname">
          <h3>Game Bilangan Rill</h3>
          <h1>Medium</h1>
        </div>
        <p>Press to start the game</p>
        <Button isClicked={this.clicked}>Start</Button>
      </div>
    );
  }
}
export default Start;
