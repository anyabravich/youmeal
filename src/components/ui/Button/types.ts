import { ReactNode, ButtonHTMLAttributes } from "react";

export interface IButton<T = void>
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  children: ReactNode;
  className?: string;
  state?: string;
  data?: T;
  onClick?: (data?: T) => void;
}
