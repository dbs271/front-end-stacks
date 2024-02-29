import styled from "styled-components";

export const Cells = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc((10px + 4px) * 8px);
`;

export const Celly = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 2px;
  border-radius: 2px;
  background-color: rgba(0, 0, 0, 0.05);
`;
