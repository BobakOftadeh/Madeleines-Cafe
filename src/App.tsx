import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  :root{
  --color-primary: #00adb5;
  --color-primary-dark: #222831;
  --color-primary-dark-light: #393e46;
  --color-primary-pale: #eeeeee;
  --bg-color: #eee;
  --btn-font-size: 18px;
}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
    font-family: "Lato", sans-serif;
    text-rendering: optimizeLegibility;
  }
  body {
    line-height: 1.7;
    background-color: #000;
  }
  
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 80vh 160vh 20vh;
`;

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
