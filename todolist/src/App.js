import styled from "styled-components";
import Login from "./components/Login";

function App() {
  return (
    <S.Wrapper>
      <Login />
    </S.Wrapper>
  );
}

export default App;

const S = {};

S.Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
