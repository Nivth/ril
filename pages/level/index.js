import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SelectLevel from "../../components/SelectLevel";

const StyledLevel = styled.div`
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 50px;
    line-height: 61px;
    margin-left: 70px;
    margin-top: 28px;
    margin-bottom: 36px;
  }
  hr {
    margin: 0;
    height: 4px;
    width: 900px;
    align-items: flex-start;
    background-color: #ffffff;
  }
  a {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    margin-left: 200px;
    margin-top: -180px;
    .aArrow {
      margin-right: 10px;
    }
  }
  .main {
    display: flex;
    .left {
      width: 800px;
      height: 600px;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }
    .right {
      margin-left: 40px;
      margin-top: -80px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .abstract {
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 1100px) {
    .main {
      flex-direction: column;
      .left {}
      .right {
        margin-left: -250px;
      }
    }
  }
  @media (max-width: 800px) {
    hr {
      width: 100%;
    }
    .main {
      .left {
        grid-template-columns: 1fr;
        width: 100%;
      }
      .right {
        margin: 0;
        margin-top: 300px;
        margin-left: -150px;
        .abstract {
          width: 600px;
        }
      }
    }
  }
`;
function Level() {
  return (
    <>
      <Head>
        <title>Level</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledLevel>
        <h1>
          Game
          <br />
          Bilangan Rill
        </h1>
        <hr />
        <div className="main">
          <div className="left">
            <SelectLevel
              level="Easy"
              desc="Penjumlahan dan pengurangan"
              href="/level/easy"
            />
            <SelectLevel
              level="Medium"
              desc="Penjumlahan, pengurangan dan perkalian"
              href="/level/medium"
            />
            <SelectLevel
              level="Hard"
              desc="Penjumlahan, pengurangan, perkalian dan pembagian"
              href="/level/hard"
            />
          </div>
          <div className="right">
            <img src="/abstract2.png" className="abstract" />
            <Link href="/">
              <a>
                <img className="aArrow" src="/arrowReturn.svg" />
                Return to Home
              </a>
            </Link>
          </div>
        </div>
      </StyledLevel>
    </>
  );
}

export default Level;
