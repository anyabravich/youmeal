import { createGlobalStyle } from "styled-components";
import { rem } from "polished";
import { breakpoints, colors } from "./theme";
import { pxToVw } from "./utils";

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

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    @media (max-width: ${breakpoints.desktop}px) {
      font-size: ${pxToVw(16)};
    }
    @media (min-width: ${breakpoints.desktop + 1}px) {
      font-size: ${`clamp(16px, ${pxToVw(16, 1440)}, 22px)`};
    }
    @media (max-width:  ${breakpoints.laptop}px) {
      font-size: 16px;
    }
  }

  body {
    font-family: "Nunito", sans-serif;
    background: ${colors.lightGray};
  }

  .h1 {
    font-size: ${rem(50)};
    font-weight: 800;
    line-height: 1.2;

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: ${rem(36)};
    }

    @media (max-width: ${breakpoints.mobile}px) {
      font-size: ${rem(30)};
    }
  }

  .h2 {
    font-size: ${rem(40)};
    font-weight: 600;
    line-height: 1.2;

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: ${rem(28)};
    }
  }

  .h3 {
    font-size: ${rem(24)};
    font-weight: 600;
    line-height: 1;

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: ${rem(16)};
    }
  }

  .text {
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: normal;

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: ${rem(12)};
    }
  }

  .text-small {
    font-size: ${rem(12)};
    font-weight: 400;
    line-height: normal;
  }

  .text-big {
    font-size: ${rem(24)};
    font-weight: 600;
    line-height: 1;

    @media (max-width: ${breakpoints.tablet}px) {
      font-size: ${rem(16)};
    }
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

  button,
  a {
    color: inherit;
  }
`;

export default GlobalStyle;
