import React from "react";
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from "../components/Timmer";
import Lifes from "../components/Lifes";
import Points from "../components/Points";
import styled from "styled-components";

const StyledMathQuiz = styled.div`
  .App-header-bar {
    position: absolute;
    top: 1em;
    display: flex;
    justify-content: space-around;
    width: 90%;
    left: 1em;
  }

  .App-header-bar span {
    flex: 1;
  }
`;
class MathQuiz extends React.Component {
  state = {
    isBeginningDone: false,
    lastPoints: 0,
  };

  retryGame = () => {
    this.setState({ isBeginningDone: false });
    this.props.onRetryGame();
  };

  completeBeginning = () => {
    this.setState({ isBeginningDone: true });
  };

  render() {
    return !this.props.isFinished ? (
      <StyledMathQuiz>
        {!this.state.isBeginningDone ? (
          <Beginning isComplete={this.completeBeginning} />
        ) : (
          <div>
            <div className="App-header-bar">
              <Timmer {...this.props} />
              <Lifes {...this.props} />
              <Points {...this.props} />
            </div>
            <Quiz {...this.props} />
          </div>
        )}
      </StyledMathQuiz>
    ) : (
      <Done {...this.props} retryGame={this.retryGame} />
    );
  }
}

export default MathQuiz;
