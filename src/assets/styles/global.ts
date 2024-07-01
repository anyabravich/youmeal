import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { colors } from "./theme";

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
    src: url("/fonts/Nunito-SemiBold.woff2") format("woff2"),
         url("/fonts/Nunito-SemiBold.woff") format("woff");
    font-weight: 600;
    font-style: normal;
  }
 @font-face {
    font-family: "Nunito";
    src: url("/fonts/Nunito-Regular.woff2") format("woff2"),
         url("/fonts/Nunito-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Nunito", sans-serif;
    background: ${colors.lightGray};
  }
  .h1 {
    font-size: ${rem(50)};
    font-weight: 800;
    line-height: 1.2;
  }
  .text {
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: normal;
  }
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: "Nunito", sans-serif;
  }
  ul, ol {
    list-style: none;
  }
`;

export default GlobalStyle;
