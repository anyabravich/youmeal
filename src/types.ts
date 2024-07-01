export interface ICard {
  id: number;
  image: string;
  price: number;
  title: string;
  weight: number;
}

export interface ICards {
  selectedLabel: string | null;
}
