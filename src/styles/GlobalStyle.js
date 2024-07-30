import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #0a0a2a;
    color: #ffffff;
  }

  .star {
    position: absolute;
    border-radius: 50%;
    background-color: #ffffff;
  }

  .big-star {
    width: 50px;
    height: 50px;
  }

  .medium-star {
    width: 30px;
    height: 30px;
  }

  .small-star {
    width: 15px;
    height: 15px;
  }

  .user-spaceship {
    font-size: 2rem;
  }

  .constellation {
    border: 1px dashed #ffffff;
  }

  a, button {
    color: #ffffff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default GlobalStyle;
