import { ChangeEvent, InputHTMLAttributes } from "react";

export interface IRadio
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  checked?: boolean;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
}

