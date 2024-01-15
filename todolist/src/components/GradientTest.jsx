import React from "react";
import styled from "styled-components";

const GradientTest = () => {
  return <S.Wrapper>GradientTest</S.Wrapper>;
};

export default GradientTest;

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #000, #fff);
`;
