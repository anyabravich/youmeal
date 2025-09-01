import { FC, useState } from "react";
import { LabelProvider } from "./components/common/LabelContext";
import Hero from "./components/features/Hero";
import Labels from "./components/features/Labels";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Popups from "./components/layout/Popups";
import { IPopupCardData } from "./types";

const App: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cardData, setCardData] = useState<IPopupCardData | undefined>(
    undefined
  );

  const handleOpenPopup = (data: IPopupCardData) => {
    setCardData(data);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCardData(undefined);
  };

  return (
    <ErrorBoundary>
      <LabelProvider>
        <Hero />
        <Labels />
        <Main onOpenPopup={handleOpenPopup} />
        <Footer />

        <Popups
          isOpened={isPopupOpen}
          onClose={handleClosePopup}
          cardData={cardData}
        />
      </LabelProvider>
    </ErrorBoundary>
  );
};

export default App;
