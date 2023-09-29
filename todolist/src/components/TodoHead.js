import React from "react";
import styled from "styled-components";

const TodoHead = () => {
  return (
    <S.HeadBlock>
      <S.Title>2023년 9월 24일</S.Title>
      <S.Day>일요일</S.Day>
      <S.TasksLeft>할 일 2개 남음</S.TasksLeft>
    </S.HeadBlock>
  );
};

export default TodoHead;

export const S = {};

S.HeadBlock = styled.div`
  padding: 48px 32px 32px 24px;
  border-bottom: 1px solid #e9ecef;
`;

S.Title = styled.h1`
  margin: 0;
  font-size: 36px;
  color: #343a40;
`;

S.Day = styled.div`
  margin-top: 4px;
  color: #868e96;
  font-size: 21px;
`;

S.TasksLeft = styled.div`
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;
