import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auto from "./pages/Auto";

function App() {
  return (
    <S.Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/auth" element={<Auto />}></Route>
        </Routes>
      </BrowserRouter>
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
