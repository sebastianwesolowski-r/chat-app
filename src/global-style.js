import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${props => props.theme.customWhite};
    font-family: 'Questrial', sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;