import { IPopupCardData } from "../../../types";
import { IProduct } from "../../../types";

export interface IPopups {
  isOpened: boolean;
  onClose: () => void;
  cardData?: IPopupCardData;
  addToBasket?: (product: IProduct, quantity?: number) => void;
  isAdded?: boolean;
  currentQuantity?: number;
  updateQuantity?: (id: number, quantity: number) => void;
}
