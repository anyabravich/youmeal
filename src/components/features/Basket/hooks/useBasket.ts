import { useState } from "react";
import { ICards } from "../../../../types";

export const useBasket = (cards: ICards["cards"]) => {
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const toggleBasket = () => {
    setIsOpenBasket((prev) => !prev);
  };

  const setCount = (id: number, count: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: count,
    }));
  };

  const totalPrice = cards.reduce((total, card) => {
    const count = quantities[card.id] || 1;
    return total + card.price * count;
  }, 0);

  return {
    isOpenBasket,
    toggleBasket,
    quantities,
    setCount,
    totalPrice,
  };
};
