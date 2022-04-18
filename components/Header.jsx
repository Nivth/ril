import styled from "styled-components";
import math from "../public/math.png";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row-reverse;
  .header-img {
    width: 100%;
    height: 800px;
    position: relative;
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
    margin-left: 38px;
    margin-right: 20px;
    font-family: "Poppins";
    font-weight: 275;
    font-size: 25px;
    line-height: 38px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img className="header-img" src={math} />
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
    </StyledHeader>
  );
}
