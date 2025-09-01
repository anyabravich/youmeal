import { IProduct } from "../types";

export interface IBasketItem extends IProduct {
  quantity: number;
}

export interface IBasketData {
  addToBasket: (product: IProduct, quantity?: number) => void;
  addedItems: number[];
  updateQuantity: (id: number, quantity: number) => void;
  basketData: IBasketItem[];
}
