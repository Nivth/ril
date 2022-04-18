import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const style = {
  buttonRetry: {
    fontSize: "1.5em",
    color: "#BDBCBC",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 500,
    cursor: "pointer",
  },
  otherButton: {
    color: "white",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "1em",
    margin: "0.1em auto 3em",
  },
  divider: {
    height: 0,
    border: "0.5px solid #BDBCBC",
  },
  poinstStyle: {
    color: "#BDBCBC",
    fontWeight: "bold",
  },
};

class Done extends React.Component {
  scoreWord() {
    const score = this.props.points;
    if (score == 0) {
      return "You have no score at all, try again!";
    } else if (score <= 300) {
      return "You have a small score, try again!";
    } else if (score <= 600) {
      return "Good, but not good enough!";
    } else if (score <= 800) {
      return "Good job!";
    } else if (score <= 1000) {
      return "Great score!";
    } else if (score <= 1200) {
      return "Perfect!";
    } else {
      return "You are the best!";
    }
  }
  render() {
    const { gameOver, divider, buttonRetry, otherButton, poinstStyle } = style;
    return (
      <div>
        <h1 style={gameOver}>GAME OVER</h1>
        <hr style={divider} />
        <h2>
          <span style={poinstStyle}>{this.scoreWord()}</span>
        </h2>
        <h3>
          FINAL SCORE <b style={poinstStyle}>{this.props.points}</b>
        </h3>
        <br />
        <h3 style={buttonRetry} onClick={this.props.retryGame}>
          RETRY
        </h3>
        <h5 style={otherButton}>
          <a href="/level">Another Level</a>
        </h5>
        {this.children}
      </div>
    );
  }
}

Done.propTypes = {
  points: PropTypes.number.isRequired,
  retryGame: PropTypes.func.isRequired,
  onReStartGame: PropTypes.func.isRequired,
};

export default Done;
