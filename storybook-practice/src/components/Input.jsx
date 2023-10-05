import React from "react";
import styled, { css } from "styled-components";

const Input = ({ placeholder, size }) => {
  return (
    <div>
      <S.Input placeholder={placeholder} size={size} />
    </div>
  );
};

export default Input;

export const S = {};

const sizes = {
  sm: css`
    font-size: 12px;
    padding: 5px;
  `,
  md: css`
    font-size: 16px;
    padding: 10px;
  `,
  lg: css`
    font-size: 20px;
    padding: 15px;
  `,
};

S.Input = styled.input`
  outline: none;
  border: 1px solid #ccc;
  border-radius: 6px;
  ${({ size }) => sizes[size]}
`;
