import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <S.Wrapper>
      <S.MyData></S.MyData>
      <S.RankerData></S.RankerData>
    </S.Wrapper>
  );
};

export default Main;

const S = {};

S.Wrapper = styled.div`
  width: 100%;
  height: 800px;
  background-color: #000;
`;

S.MyData = styled.div`
  width: 500px;
  height: 300px;
  /* background-image: linear-gradient(to bottom, #000, #55170f); */
  background-color: #fff;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
`;

S.RankerData = styled.div`
  width: 800px;
  height: 300px;
  /* background-image: linear-gradient(to bottom, #000, #0e4240); */
  background-color: #fff;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
`;
