import { ChangeEvent, InputHTMLAttributes } from "react";

export interface IInput
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  error?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
