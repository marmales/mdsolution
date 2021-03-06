import React, { useContext } from "react";
import styled from "styled-components";

import HomePage from "./HomePage";
import MainPage from "./MainPage";
import ViewContext from "./ViewContext";

const Window = styled.div`
  display: flex;
  flex-direction: column;

  *:focus {
    outline: none;
  }
`;

function App() {
  const { firstScroll } = useContext(ViewContext);
  return (
    <Window>
      <HomePage />
      {firstScroll ? null : <MainPage />}
    </Window>
  );
}
export default App;
