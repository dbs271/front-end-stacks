import styled, { css } from "styled-components";

const variantCSS = {
  primary: css`
    color: #fff;
    border: 1px solid #ff5e4b;
    background-color: #ff5e4b;
    &:hover {
      border: 1px solid #ff553b;
      background-color: #ff553b;
    }
  `,
  secondary: css`
    color: #fff;
    border: 1px solid #35ece5;
    background-color: #35ece5;
    &:hover {
      border: 1px solid #45c8b3;
      background-color: #45c8b3;
    }
  `,
};

// small

/**

position: absolute;
width: 200px;
height: 50px;
left: 860px;
top: 713px;

background: #FF5E4B;
border-radius: 14px;

 */

// medium
/**

position: absolute;
width: 281px;
height: 75px;
left: 0px;
top: 0px;

background: #FF5E4B;
border-radius: 14px;

 */

// large

/**

position: absolute;
width: 471px;
height: 111px;
left: 0px;
top: 0px;

background: #FF5E4B;
 
 */

const sizeCSS = {
  small: css`
    width: 200px;
    height: 50px;
    border-radius: 14px;
  `,
  medium: css`
    width: 280px;
    height: 75px;
    border-radius: 14px;
  `,
  large: css`
    width: 470px;
    height: 110px;
  `,
};

const S = {};

S.Button = styled.button`
  ${({ size }) => sizeCSS[size]};
  ${({ variant }) => variantCSS[variant]};
  font-size: ${({ fontSize }) => fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: bold;
  cursor: pointer;
`;

export default S;
