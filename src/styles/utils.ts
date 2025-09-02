import { css } from "styled-components";

export const pxToVw = (px: number, width: number = 1440) => {
  return `calc(${((px / width) * 100).toFixed(4)}vw)`;
};

export const hideScrollbars = css`
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    appearance: none;
    width: 0;
    height: 0;
  }
`;
