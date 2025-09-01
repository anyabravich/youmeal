import { ICard } from "../../../types";

export interface ICardPopup extends ICard {
  onOpenPopup: () => void;
}
