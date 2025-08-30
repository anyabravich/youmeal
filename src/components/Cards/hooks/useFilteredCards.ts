import { useMemo } from "react";
import { IProduct } from "../../../types";

export const useFilteredCards = (
  cards: IProduct[],
  selectedLabel?: string | null
) => {
  return useMemo(() => {
    return cards.filter((card) =>
      selectedLabel ? card.category === selectedLabel : true
    );
  }, [cards, selectedLabel]);
};
