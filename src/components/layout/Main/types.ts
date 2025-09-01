import { IBasketData } from "../../../types/basket";

export interface IMain {
  onOpenPopup: (data: any) => void;
  onBasketDataChange: (basketData: IBasketData) => void;
}
