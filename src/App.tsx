import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
    font-family: "Lato";
    text-rendering: optimizeLegibility;
  }
  body {
    line-height: 1.7;
    background-color: #000;
  }
  
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 80vh 160vh 30vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content />
      <footer>asd</footer>
    </Container>
  );
}

export default App;
