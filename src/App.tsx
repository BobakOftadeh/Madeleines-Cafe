import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router, Redirect } from '@reach/router';
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

    
    @media only screen and (max-width: 1600px){
      font-size: 55%;
    }

    @media only screen and (max-width: 1300px){
      font-size: 52%;
    }

    @media only screen and (max-width: 1000px){
      font-size: 50%;
    }

    @media only screen and (max-width: 700px){
      font-size: 40%;
    }

    @media only screen and (max-width: 450px){
      font-size: 30%;
    }

    @media only screen and (max-width: 400px){
      font-size: 20%;
    }
   
  }
  body {
    line-height: 1.7;
    background-color: var(--color-primary-pale);
  }
  
  p,
 li,
 h1,
 h2,
 h3,
 h4 {
  word-break: break-word;
  hyphens: auto;
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
