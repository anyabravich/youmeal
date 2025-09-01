import { ChangeEvent, InputHTMLAttributes } from "react";

export interface ICheckbox
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean, event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}
