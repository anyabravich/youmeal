import { ICard } from "../../types";

export interface BasketCardProps extends ICard {
  id: number;
  count: number;
  setCount: (id: number, count: number) => void;
  removeFromBasket?: (id: number) => void;
}
