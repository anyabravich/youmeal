export const formatWeight = (weight: number): string =>
  weight < 1000 ? `${weight}г.` : `${(weight / 1000).toFixed(2)}кг`;
