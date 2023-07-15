import styled, { createGlobalStyle } from "styled-components";

import AppContainer from "./AppContainer/AppContainer";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #131518;
  color: hsl(217, 12%, 63%);
  font-family: 'Overpass', sans-serif;
}
`;

const StyledApp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <AppContainer />
    </StyledApp>
  );
}

export default App;
