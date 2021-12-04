import { createGlobalStyle } from 'styled-components';

export const base = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    margin: 0;
  }

  img {
    max-width: 100%;
  } 
`;
