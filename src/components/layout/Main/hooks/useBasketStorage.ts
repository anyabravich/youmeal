import { useState, useEffect } from "react";
import { IProduct } from "../../../../types";
import { IBasketItem } from "../../../../types/basket";
import { useErrorHandler } from "../../../../hooks/useErrorHandler";

export const useBasketStorage = () => {
  const [basketData, setBasketData] = useState<IBasketItem[]>([]);
  const [addedItems, setAddedItems] = useState<number[]>([]);
  const { setError, clearError } = useErrorHandler();

  const safeLocalStorage = {
    getItem: (key: string): string | null => {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        setError(
          "Ошибка доступа к локальному хранилищу",
          "STORAGE_ERROR",
          error
        );
        return null;
      }
    },
    setItem: (key: string, value: string): boolean => {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch (error) {
        setError(
          "Ошибка сохранения в локальное хранилище",
          "STORAGE_ERROR",
          error
        );
        return false;
      }
    },
  };

  const safeJsonParse = (jsonString: string): IBasketItem[] | null => {
    try {
      const parsed = JSON.parse(jsonString);

      if (!Array.isArray(parsed)) {
        throw new Error("Данные корзины имеют неверный формат");
      }

      const isValidBasketItem = (item: any): item is IBasketItem => {
        return (
          item &&
          typeof item.id === "number" &&
          typeof item.title === "string" &&
          typeof item.price === "number" &&
          typeof item.weight === "number" &&
          typeof item.image === "string" &&
          typeof item.category === "string" &&
          typeof item.quantity === "number"
        );
      };

      if (!parsed.every(isValidBasketItem)) {
        throw new Error("Данные корзины содержат неверные элементы");
      }

      return parsed;
    } catch (error) {
      setError("Ошибка чтения данных корзины", "PARSE_ERROR", error);
      return null;
    }
  };

  useEffect(() => {
    const savedBasket = safeLocalStorage.getItem("basket");
    if (savedBasket) {
      const parsedBasket = safeJsonParse(savedBasket);
      if (parsedBasket) {
        setBasketData(parsedBasket);
        setAddedItems(parsedBasket.map((product) => product.id));
        clearError();
      }
    }
  }, [clearError]);

  const addToBasket = (product: IProduct, quantity: number = 1) => {
    try {
      const existingItemIndex = basketData.findIndex(
        (item) => item.id === product.id
      );

      let updatedBasket: IBasketItem[];

      if (existingItemIndex !== -1) {
        updatedBasket = [...basketData];
        updatedBasket[existingItemIndex].quantity += quantity;
      } else {
        const newItem: IBasketItem = { ...product, quantity };
        updatedBasket = [...basketData, newItem];
      }

      const success = safeLocalStorage.setItem(
        "basket",
        JSON.stringify(updatedBasket)
      );

      if (success) {
        setBasketData(updatedBasket);
        setAddedItems((prev) => [...prev, product.id]);
        clearError();
      }
    } catch (error) {
      setError("Ошибка добавления товара в корзину", "ADD_ERROR", error);
    }
  };

  const removeFromBasket = (id: number) => {
    try {
      const updatedBasket = basketData.filter((item) => item.id !== id);
      const success = safeLocalStorage.setItem(
        "basket",
        JSON.stringify(updatedBasket)
      );

      if (success) {
        setBasketData(updatedBasket);
        setAddedItems((prev) => prev.filter((itemId) => itemId !== id));
        clearError();
      }
    } catch (error) {
      setError("Ошибка удаления товара из корзины", "REMOVE_ERROR", error);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    try {
      const updatedBasket = basketData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      });

      const success = safeLocalStorage.setItem(
        "basket",
        JSON.stringify(updatedBasket)
      );

      if (success) {
        setBasketData(updatedBasket);
        clearError();
      }
    } catch (error) {
      setError("Ошибка обновления количества товара", "UPDATE_ERROR", error);
    }
  };

  const totalPrice = basketData.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return {
    basketData,
    addedItems,
    addToBasket,
    removeFromBasket,
    updateQuantity,
    totalPrice,
  };
};
