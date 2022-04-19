import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 40px;
  }
  .top {
    display: flex;
    flex-direction: row-reverse;
    .header-img {
      width: 100%;
      height: 800px;
    }
    h1 {
      margin: 0;
      position: absolute;
      width: 578px;
      height: 250px;
      left: 25px;
      top: 57px;
      background: rgba(255, 255, 255, 0);
      font-family: "Inter";
      font-weight: 300;
      font-size: 103.387px;
      line-height: 125px;
      margin-left: 8px;
    }
    article {
      margin-top: 355px;
    }
    hr {
      margin: 0;
      width: auto;
      height: 4px;
      background-color: #ffffff;
    }
    p {
      margin-top: 50px;
      font-family: "Poppins";
      font-weight: 275;
      font-size: 25px;
      line-height: 38px;
    }
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      .header-img {
        height: 400px;
      }
      h1 {
        margin: 0;
        font-size: 70px;
        line-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        width: auto;
        padding: 20px;
      }
      article {
        margin-top: 0;
      }
    }
  }
  .main {
    margin-top: -200px;
    margin-bottom: -100px;
    align-items: center;
    display: flex;
    article {
      font-family: "Poppins";
      font-weight: 275;
      font-size: 25px;
      line-height: 38px;
      right: 70px;
      position: relative;
    }
    .p {
      margin-top: 40px;
    }
    button {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      color: #000000;
      width: 186px;
      height: 48px;
      background: linear-gradient(180deg, #fefefe 0%, #292929 100%);
      border-radius: 12px;
      margin-top: 40px;
    }
    img {
      background-color: inherit;
    }
    @media (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .main-img {
        width: 100%;
        height: 100%;
        margin: 50px;
      }
      article {
        margin: 0;
        margin-top: -160px;
        position: inherit;
      }
      p {
        margin-top: 0;
      }
    }
  }
  .footer {
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 46px;
      line-height: 56px;
      margin-left: 40px;
    }
    .creator {
      display: flex;
      align-items: center;
      margin-right: 40px;
      margin-left: 13px;
      margin-top: 50px;
      margin-bottom: 30px;
    }
    .people {
      display: flex;
      align-items: center;
    }
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      margin-left: 30px;
      margin-right: 30px;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      margin-left: auto;
      text-align: right;
    }
    hr {
      margin: 0;
      height: 48px;
    }
    a {
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    @media (max-width: 1270px) {
      margin-top: 200px;
      .creator {
        flex-direction: column;
        .people {
          width: 100%;
          h3 {
            font-size: 18px;
            line-height: 26px;
          }
        }
        p {
          font-size: 16px;
          line-height: 26px;
          margin-right: 0;
          margin-bottom: 0;
          margin-left: auto;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Real number</title>
        <meta name="description" content="real number game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="top">
          <img className="header-img" src="/math.png" />
          <div className="header">
            <h1>
              Operasi <br /> Bilangan Riil
            </h1>
            <article>
              <hr />
              <p>
                Bilangan riil atau bilangan real dalam matematika menyatakan
                bilangan yang bisa dituliskan dalam bentuk desimal, seperti
                2,4871773339… atau 3,25678.
              </p>
            </article>
          </div>
        </div>
        <div className="main">
          <img className="main-img" src="/abstract.png" />
          <article>
            <p>
              Bilangan real meliputi bilangan rasional, seperti 42 dan −23/129,
              dan bilangan irasional, dan π .Bilangan riil juga dapat
              dilambangkan sebagai salah satu titik dalam garis bilangan.
            </p>
            <p className="p">
              Definisi popular dari bilangan real meliputi klas ekuivalen dari
              deret Cauchy rasional, irisan Dedekind dan deret Archimides.
              Bilangan riil ini berbeda dengan bilangan kompleks yang termasuk
              di dalamnya adalah bilangan imajiner.
            </p>
            <p>
              <Link href="/level">
                <button>
                  Mainkan gamenya <img src="/Arrow.svg" />
                </button>
              </Link>
            </p>
          </article>
        </div>
        <div className="footer">
          <h1>Created By</h1>
          <div className="creator">
            <div className="people">
              <h3>
                <a href="https://github.com/Nivth">Kevin Yardan Fauzan</a>
              </h3>
              <hr />
              <h3>
                <a href="https://github.com/FajarAfrizal">
                  Fajar Muhammad Afrizal
                </a>
              </h3>
              <hr />
              <h3>
                <a href="https://github.com/eandreaaa">
                  Elizabeth Andrea Jamco
                </a>
              </h3>
              <hr />
            </div>
            <p>Copyright © 2022 Kelompok 6</p>
          </div>
        </div>
      </Container>
    </>
  );
}
