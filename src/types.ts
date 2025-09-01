export enum ProductCategory {
  BURGERS = "Бургеры",
  SNACKS = "Закуски",
  HOT_DOGS = "Хот-доги",
  DRINKS = "Напитки",
}
export interface IProduct {
  id: number;
  image: string;
  price: number;
  title: string;
  weight: number;
  category: ProductCategory;
}

export interface ICardItem extends IProduct {
  count: number;
  setCount: (id: number, count: number) => void;
  removeFromBasket: (id: number) => void;
}

export interface ICard extends IProduct {
  isAdded: boolean;
  addToBasket: (product: IProduct) => void;
}

export interface ICards {
  selectedLabel?: string | null;
  cards: IProduct[];
  addToBasket?: (product: IProduct) => void;
  addedItems?: number[];
  removeFromBasket?: (id: number) => void;
}

export interface IPopupCardData {
  id: number;
  image: string;
  price: number;
  title: string;
  weight: number;
  category: ProductCategory;
}
