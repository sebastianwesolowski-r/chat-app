import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;