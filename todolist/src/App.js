import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Validation from "./components/Validation";

function App() {
  return (
    // <S.Wrapper>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Main />}></Route>
    //       <Route path="/auth" element={<Auth />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </S.Wrapper>
    <S.Container>
      <Validation />
    </S.Container>
  );
}

export default App;

const S = {};

S.Wrapper = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

S.Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
