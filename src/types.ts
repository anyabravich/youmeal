export interface ICard {
  id: number;
  image: string;
  price: number;
  title: string;
  weight: number;
  category?: string;
  addToBasket?: (cardData: {
    id: number;
    image: string;
    price: number;
    title: string;
    weight: number;
  }) => void;
  isAdded?: boolean;
}

export interface ICards {
  selectedLabel?: string | null;
  cards: ICard[] | [];
  addToBasket?: (card: ICard) => void;
  addedItems?: number[];
}
