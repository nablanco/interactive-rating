import styled, { createGlobalStyle } from "styled-components";

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
      <div className="app-container"></div>
    </StyledApp>
  );
}

export default App;
