import { WEIGHT_CONSTANTS } from "../constants";

export const formatWeight = (weight: number): string =>
  weight < WEIGHT_CONSTANTS.GRAMS_TO_KILOGRAMS
    ? `${weight}г.`
    : `${(weight / WEIGHT_CONSTANTS.GRAMS_TO_KILOGRAMS).toFixed(
        WEIGHT_CONSTANTS.DECIMAL_PLACES
      )}кг`;
