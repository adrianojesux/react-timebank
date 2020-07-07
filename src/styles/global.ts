import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: #f6f6f6;
    color: #222;
    font-family: 'Ubuntu', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    height: 100%;
  }
  button {
    cursor: pointer;
  }
  a, a:hover {
    text-decoration: none;
    color: unset;
  }
`;
