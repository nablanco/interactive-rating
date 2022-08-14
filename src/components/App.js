import styled, { createGlobalStyle } from "styled-components";

import Rating from "./Rating/Rating";
import ThankYou from "./Thank-you/Thank-you";
import Attribution from "./Attribution/Attribution";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #131518;
  color: hsl(217, 12%, 63%);
  font-family: 'Kumbh Sans', sans-serif;
}
`;

const StyledApp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const AppContainer = styled.div`
  display: flex;
  width: 350px;
  height: 375px;
  border-radius: 20px;
  background: linear-gradient(180deg, hsl(213, 19%, 16%), hsl(213, 19%, 10%));
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <AppContainer>
        <Rating />
        <ThankYou />
      </AppContainer>
      <Attribution />
    </StyledApp>
  );
}

export default App;
