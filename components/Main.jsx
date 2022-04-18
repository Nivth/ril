import styled from "styled-components";
import abstract from "../public/abstract.png";
import arrow from "../public/Arrow.svg";

const StyledMain = styled.div`
  margin-top: -200px;
  margin-bottom: -100px;
  align-items: center;
  display: flex;
  .main-img {
  }
  article {
    font-family: "Poppins";
    font-weight: 275;
    font-size: 25px;
    line-height: 38px;
    position: relative;
    right: 70px;
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
`;
export default function Main() {
  return (
    <StyledMain>
      <img className="main-img" src={abstract} />
      <article>
        <p>
          Bilangan real meliputi bilangan rasional, seperti 42 dan −23/129, dan
          bilangan irasional, dan π .Bilangan riil juga dapat dilambangkan
          sebagai salah satu titik dalam garis bilangan.
        </p>
        <p className="p">
          Definisi popular dari bilangan real meliputi klas ekuivalen dari deret
          Cauchy rasional, irisan Dedekind dan deret Archimides. Bilangan riil
          ini berbeda dengan bilangan kompleks yang termasuk di dalamnya adalah
          bilangan imajiner.
        </p>
        <a href="/level">
          <button>
            Mainkan gamenya <img src={arrow} />
          </button>
        </a>
      </article>
    </StyledMain>
  );
}
