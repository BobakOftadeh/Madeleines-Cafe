import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Booking from './pages/Booking';

const GlobalStyle = createGlobalStyle`
  :root{
  --color-primary: #00adb5;
  --color-primary-dark: #222831;
  --color-primary-dark-light: #393e46;
  --color-primary-pale: #eeeeee;
  --color-black: #000000;
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
    background-color: var(--color-primary-pale);
  }
  
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Home path="/" />
        <Booking path="booking" />
      </Router>
    </div>
  );
}

export default App;
