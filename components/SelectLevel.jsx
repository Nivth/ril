import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const StyledSelectLevel = styled.div`
  margin-top: 95px;
  margin-left: 90px;
  button {
    background-color: #161515;
    color: #fff;
    border: 0.85px solid #ffffff;
    box-sizing: border-box;
    border-radius: 42px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12.551px;
    line-height: 160%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8.36732px 16.7346px;
    position: absolute;
    bottom: 15px;
    right: 20px;

    img {
      margin-left: 8px;
      width: 10px;
      height: 14px;
    }
  }
  h3 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 30.1961px;
    line-height: 35px;
    display: flex;
    align-items: center;
    letter-spacing: -0.377451px;
    margin-left: 45px;
    padding-top: 16px;
    width: 184.77px;
    height: 55.34px;
    padding-bottom: 9px;
  }
  p {
    width: 185px;
    height: 81px;
    left: 142px;
    top: 367px;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;
    display: flex;
    align-items: center;
    letter-spacing: -0.301961px;
    color: #ffffff;
    margin-left: 45px;
    margin-top: -25px;
  }
  .gray {
    width: 270px;
    height: 180px;
    background: #717070;
    border-radius: 13px;
    position: relative;
  }
  .box {
    position: absolute;
    height: 200px;
    width: 155px;
    border: 2.2px solid #ffffff;
    box-sizing: border-box;
    margin-top: 80px;
    margin-left: -10px;
  }
`;
export default function SelectLevel({ level, desc, href }) {
  return (
    <StyledSelectLevel>
      <div className="box">
        <Link href={href}>
          <a>
            <Button children={"Play"} />
          </a>
        </Link>
      </div>
      <div className="gray">
        <h3>{level}</h3>
        <p>{desc}</p>
      </div>
    </StyledSelectLevel>
  );
}
