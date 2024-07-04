import { createContext, useState, useContext, ReactNode, FC } from "react";

interface LabelContextType {
  selectedLabel: string | null;
  setSelectedLabel: (label: string | null) => void;
}

const LabelContext = createContext<LabelContextType | undefined>(undefined);

export const LabelProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  return (
    <LabelContext.Provider value={{ selectedLabel, setSelectedLabel }}>
      {children}
    </LabelContext.Provider>
  );
};

export const useLabel = (): LabelContextType => {
  const context = useContext(LabelContext);
  if (!context) {
    throw new Error("useLabel must be used within a LabelProvider");
  }
  return context;
};
