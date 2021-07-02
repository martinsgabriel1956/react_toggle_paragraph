import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-family: sans-serif;
  background: #fff;
}

  body {
    margin: 0;
  }
  
  main {
    margin-top: 6rem;
  }
`;
