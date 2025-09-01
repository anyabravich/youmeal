import { ReactNode } from "react";

export interface IButton<T = void> {
  children: ReactNode;
  className?: string;
  state?: string;
  data?: T;
  onClick?: (data?: T) => void;
}
