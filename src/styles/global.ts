import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Abel&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Manjari&display=swap');

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    background: #fff;
    color: #666;
    font-family: 'Manjari';
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
