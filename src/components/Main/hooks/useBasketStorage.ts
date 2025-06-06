import { useState, useEffect } from "react";
import { ICard } from "../../../types";

export const useBasketStorage = () => {
  const [basketData, setBasketData] = useState<ICard[]>([]);
  const [addedItems, setAddedItems] = useState<number[]>([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      const parsedBasket: ICard[] = JSON.parse(savedBasket);
      setBasketData(parsedBasket);
      setAddedItems(parsedBasket.map((card) => card.id));
    }
  }, []);

  const addToBasket = (card: ICard) => {
    const updatedBasket = [...basketData, card];
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    setBasketData(updatedBasket);
    setAddedItems((prev) => [...prev, card.id]);
  };

  return {
    basketData,
    addedItems,
    addToBasket,
  };
};
