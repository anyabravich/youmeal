import { ReactNode } from "react";

export interface IButton<T = void> {
  children: ReactNode;
  className?: string;
  data?: T;
  onClick?: (data?: T) => void;
}
