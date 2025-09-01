import { useState, useEffect } from "react";
import { IProduct } from "../../../../types";
import { IPopupProductProps } from "../types";

export const usePopupProduct = ({
  cardData,
  addToBasket,
  isAdded,
  onClose,
  currentQuantity = 1,
  updateQuantity,
}: IPopupProductProps) => {
  const [quantity, setQuantity] = useState(currentQuantity);
  const [localIsAdded, setLocalIsAdded] = useState(isAdded || false);

  useEffect(() => {
    setLocalIsAdded(isAdded || false);
    setQuantity(currentQuantity);
  }, [isAdded, currentQuantity, cardData?.id]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    if (isAdded && updateQuantity && cardData) {
      updateQuantity(cardData.id, newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      if (isAdded && updateQuantity && cardData) {
        updateQuantity(cardData.id, newQuantity);
      }
    }
  };

  const handleAddToBasket = () => {
    if (addToBasket && cardData) {
      const product: IProduct = {
        id: cardData.id,
        image: cardData.image,
        price: cardData.price,
        title: cardData.title,
        weight: cardData.weight,
        category: cardData.category,
      };

      addToBasket(product, quantity);
      setLocalIsAdded(true);

      if (onClose) {
        onClose();
      }
    }
  };

  const totalPrice = cardData ? cardData.price * quantity : 0;

  return {
    quantity,
    localIsAdded,
    totalPrice,
    handleIncrement,
    handleDecrement,
    handleAddToBasket,
  };
};
