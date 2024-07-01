import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: "Nunito";
    src: url("/fonts/Nunito-ExtraBold.woff2") format("woff2"),
         url("/fonts/Nunito-ExtraBold.woff") format("woff");
    font-weight: 800;
    font-style: normal;
  }
 @font-face {
    font-family: "Nunito";
    src: url("/fonts/Nunito-Regular.woff2") format("woff2"),
         url("/fonts/Nunito-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Nunito", sans-serif;
  }
`;

export default GlobalStyle;
