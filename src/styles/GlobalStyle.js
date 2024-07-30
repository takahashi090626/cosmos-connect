// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #0a0a2a;
    color: #ffffff;
  }

  canvas {
    width: 100vw;
    height: 100vh;
  }

  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-around;
  }

  a, button {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid white;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
