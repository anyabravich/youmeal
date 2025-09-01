import { useState, useEffect } from "react";
import { IProduct } from "../../../../types";
import { useErrorHandler } from "../../../../hooks/useErrorHandler";

export const useBasketStorage = () => {
  const [basketData, setBasketData] = useState<IProduct[]>([]);
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

  const safeJsonParse = (jsonString: string): IProduct[] | null => {
    try {
      const parsed = JSON.parse(jsonString);

      if (!Array.isArray(parsed)) {
        throw new Error("Данные корзины имеют неверный формат");
      }

      const isValidProduct = (product: any): product is IProduct => {
        return (
          product &&
          typeof product.id === "number" &&
          typeof product.title === "string" &&
          typeof product.price === "number" &&
          typeof product.weight === "number" &&
          typeof product.image === "string" &&
          typeof product.category === "string"
        );
      };

      if (!parsed.every(isValidProduct)) {
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

  const addToBasket = (product: IProduct) => {
    try {
      const updatedBasket = [...basketData, product];
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

  return {
    basketData,
    addedItems,
    addToBasket,
    removeFromBasket,
  };
};
