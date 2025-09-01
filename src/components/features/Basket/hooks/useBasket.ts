import { useState } from "react";
import { IBasketItem } from "../../../../types/basket";

export const useBasket = (cards: IBasketItem[]) => {
  const [isOpenBasket, setIsOpenBasket] = useState(false);

  const toggleBasket = () => {
    setIsOpenBasket((prev) => !prev);
  };

  const totalPrice = cards.reduce((total, card) => {
    return total + card.price * card.quantity;
  }, 0);

  return {
    isOpenBasket,
    toggleBasket,
    totalPrice,
  };
};
