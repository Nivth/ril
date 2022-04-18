import React, { Component } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../../../redux/index";
import Start from "./Start";
import MathQuiz from "../../../containers/MathQuiz";
import styled from "styled-components";
import Head from "next/head";

const RandomStyled = styled.div`
  .App {
    text-align: center;
  }

  .App-header {
    background-color: #161515;
    min-height: 100vh; /*95vh*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-brandname h3 {
    margin: 0;
    font-family: "Poppins";
    font-style: italic;
    font-weight: 500;
    font-size: 1.875rem;
    line-height: 2.813rem;
    color: #bdbcbc;
  }

  .App-brandname h1 {
    margin-top: 0;
    font-family: "Poppins";
    font-style: italic;
    font-weight: 600;
    font-size: 3.125rem;
    line-height: 4.688rem;
    color: #ffffff;
  }

  P {
    margin-top: 2.5rem;
    margin-bottom: 1.75rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 1.563rem;
    line-height: 1.875rem;
    color: #bdbcbc;
  }

  .App-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #161515;
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 5rem;
    color: #ffffff;
    width: 10.125rem;
    height: 4.364rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 160%;
    color: #ffffff;
  }

  .App-link:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .App-input {
    padding: 1em;
    border-radius: 6px;
    border: 2px solid #002d87;
    font-size: 1em;
    font-weight: bold;
    text-align: center;
  }

  .App-input--sm {
    padding: 0.3em !important;
  }

  .correct-answer {
    /*background: linear-gradient(120deg, rgb(49, 205, 97) 30%, rgb(94, 209, 10) 70%);*/
    color: rgb(49, 205, 97);
  }

  .wrong-answer {
    /*background: linear-gradient(120deg, rgb(255, 37, 99) 30%, rgb(255, 80, 7) 70%);*/
    color: rgb(255, 37, 99);
  }

  .answer {
    font-size: 5em;
    /* padding: 1em 2em; */
    border-radius: 100px;
    animation-name: answerModal;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .show-up {
    animation-name: show;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes show {
    from {
      opacity: 0.85;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes answerModal {
    from {
      transform: scale(1);
      opacity: 0.5;
    }
    to {
      transform: scale(1.2);
      opacity: 1;
    }
  }
  .start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .run {
    margin-left: 0.625rem;
  }
`;
class Random extends Component {
  gameStart = () => {
    this.props.onStartGame();
  };

  render() {
    return (
      <>
      <Head>Hard</Head>
      <link rel="icon" href="/favicon.ico" />
        <RandomStyled>
          <div className="App">
            <header className="App-header">
              {!this.props.isStarted ? (
                <Start startPressed={this.gameStart} />
              ) : (
                <MathQuiz {...this.props} gameStart={this.gameStart} />
              )}
            </header>
            {/* <Footer /> */}
          </div>
        </RandomStyled>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);
