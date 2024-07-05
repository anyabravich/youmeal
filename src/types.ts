export interface ICard {
  id: number;
  image: string;
  price: number;
  title: string;
  weight: number;
  category?: string;
}

export interface ICards {
  selectedLabel?: string | null;
  cards: ICard[] | [];
}
