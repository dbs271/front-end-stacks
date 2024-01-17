import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = ({ label, backgroundColor, size, handleClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    color: "white",
  };

  return (
    <S.Button onClick={handleClick} style={style}>
      {label}
    </S.Button>
  );
};

export default Button;

const S = {};

S.Button = styled.button`
  cursor: pointer;
`;
