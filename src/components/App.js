import styled, { createGlobalStyle } from "styled-components";

import Rating from "./Rating/Rating";
import ThankYou from "./Thank-you/Thank-you";
import IconStar from "../images/icon-star.svg";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #131518;
}
`;

const StyledApp = styled.div``;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <div className="app-container">
        <Rating></Rating>
        <ThankYou></ThankYou>
      </div>
    </StyledApp>
  );
}

export default App;
