import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // ------------------------------------------
  // Base
  //-------------------------------------------
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
  // ------------------------------------------
  // Reset
  //-------------------------------------------
  a {
    background: transparent; // IE10
    text-decoration: none;
    color: inherit;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  nav,
  section,
  summary {
    display: block;
  }

  p,
  ul,
  ol,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  body,
  fieldset,
  blockquote {
    margin: 0;
  }

  ul,
  ol,
  fieldset {
    padding: 0;
  }

  fieldset,
  img {
    border: 0;
  }

  li {
    list-style: none;
  }

  // ------------------------------------------
  // Typography
  //-------------------------------------------

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font: inherit;
  }

  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'],
  input[type='radio'] {
    font: inherit;
    padding: 0;
    color: inherit;
    cursor: pointer;
  }

  // ------------------------------------------
  // Tables
  //-------------------------------------------

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  // ------------------------------------------
  // Other
  //-------------------------------------------

  q {
    quotes: '«' '»';
  }
`;

export default GlobalStyle;