import { IProduct, ProductCategory } from "../../../types";

export interface IPopupCardData {
  id: number;
  image: string;
  price: number;
  title: string;
  weight: number;
  category: ProductCategory;
}

export interface IPopupProductProps {
  cardData?: IPopupCardData;
  addToBasket?: (product: IProduct, quantity?: number) => void;
  isAdded?: boolean;
  onClose?: () => void;
  currentQuantity?: number;
  updateQuantity?: (id: number, quantity: number) => void;
}

export interface IPopups {
  isOpened: boolean;
  onClose: () => void;
  cardData?: IPopupCardData;
  addToBasket?: (product: IProduct, quantity?: number) => void;
  isAdded?: boolean;
  currentQuantity?: number;
  updateQuantity?: (id: number, quantity: number) => void;
}
