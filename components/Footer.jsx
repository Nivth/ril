import styled from "styled-components";

const StyledFooter = styled.footer`
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
    margin-top: 50px;
    margin-left: 13px;
    margin-right: 40px;
    margin-bottom: 50px;
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
`;
export default function Footer() {
  return (
    <StyledFooter>
      <h1>Created By</h1>
      <div className="creator">
        <h3>
          <a href="https://github.com/Nivth">Kevin Yardan Fauzan</a>
        </h3>
        <hr />
        <h3>
          <a href="https://github.com/FajarAfrizal">Fajar Muhammad Afrizal</a>
        </h3>
        <hr />
        <h3>
          <a href="https://github.com/eandreaaa">Elizabeth Andrea Jamco</a>
        </h3>
        <hr />
        <p>Copyright © 2022 Kevin</p>
      </div>
    </StyledFooter>
  );
}
