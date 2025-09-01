import { ICards } from "../../../types";

export interface ICardsPopup extends ICards {
  onOpenPopup: () => void;
}
