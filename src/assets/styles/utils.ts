export const pxToVw = (px: number, width: number = 1440) => {
  return `calc(${((px / width) * 100).toFixed(4)}vw)`;
};
