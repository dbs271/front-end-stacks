import React from "react";
import styled from "styled-components";

const MainImage = () => {
  return (
    <S.Wrapper>
      <S.Logo>LOGO</S.Logo>
    </S.Wrapper>
  );
};

export default MainImage;

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) 10%,
      rgba(255, 255, 255, 0.5) 25%,
      rgba(255, 255, 255, 0.3) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(0, 0, 0, 0.5) 70%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 1) 100%
    ),
    url("/assets/img/profile.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

S.Logo = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`;
