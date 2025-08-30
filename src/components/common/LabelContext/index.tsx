import { createContext, useState, useContext, ReactNode, FC } from "react";
import { ILabelContext } from "./types";

const LabelContext = createContext<ILabelContext | undefined>(undefined);

export const LabelProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>("Бургеры");

  return (
    <LabelContext.Provider value={{ selectedLabel, setSelectedLabel }}>
      {children}
    </LabelContext.Provider>
  );
};

export const useLabel = (): ILabelContext => {
  const context = useContext(LabelContext);

  if (!context) {
    throw new Error("useLabel must be used within a LabelProvider");
  }

  return context;
};
