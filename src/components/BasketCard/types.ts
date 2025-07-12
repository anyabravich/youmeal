import { ICard } from "../../types";

export interface BasketCardProps extends ICard {
  count: number;
  setCount: (id: number, count: number) => void;
}
