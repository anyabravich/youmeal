import { IBasketItem } from "../../../types/basket";

export interface BasketCardProps extends IBasketItem {
  count: number;
  updateQuantity: (id: number, count: number) => void;
  removeFromBasket?: (id: number) => void;
}
