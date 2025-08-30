import { IProduct } from "../../types";

export interface BasketCardProps extends IProduct {
  count: number;
  setCount: (id: number, count: number) => void;
  removeFromBasket?: (id: number) => void;
}
