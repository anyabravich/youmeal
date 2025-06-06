import { useState } from "react";

export const useQuantity = (initialCount: number = 1) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return {
    count,
    increment,
    decrement,
    setCount,
  };
};
