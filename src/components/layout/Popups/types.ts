import { IPopupCardData } from "../../../types";

export interface IPopups {
  isOpened: boolean;
  onClose: () => void;
  cardData?: IPopupCardData;
}
