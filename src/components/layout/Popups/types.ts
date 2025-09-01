import { IProduct, ProductCategory } from "../../../types";

export enum PopupType {
  PRODUCT = "product",
  DELIVERY = "delivery",
}

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

export interface IPopupDeliveryProps {
  onClose?: () => void;
}

export interface IPopups {
  isOpened: boolean;
  onClose: () => void;
  popupType: PopupType;
  cardData?: IPopupCardData;
  addToBasket?: (product: IProduct, quantity?: number) => void;
  isAdded?: boolean;
  currentQuantity?: number;
  updateQuantity?: (id: number, quantity: number) => void;
}
