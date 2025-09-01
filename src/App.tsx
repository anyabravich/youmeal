import { FC, useState } from "react";
import { LabelProvider } from "./components/common/LabelContext";
import Hero from "./components/features/Hero";
import Labels from "./components/features/Labels";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Popups from "./components/layout/Popups";
import { IPopupCardData } from "./components/layout/Popups/types";
import { IBasketData } from "./types/basket";

const App: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cardData, setCardData] = useState<IPopupCardData | undefined>(
    undefined
  );
  const [basketData, setBasketData] = useState<IBasketData | null>(null);

  const handleOpenPopup = (data: IPopupCardData) => {
    setCardData(data);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCardData(undefined);
  };

  const handleBasketDataChange = (data: IBasketData) => {
    setBasketData(data);
  };

  return (
    <ErrorBoundary>
      <LabelProvider>
        <Hero />
        <Labels />
        <Main
          onOpenPopup={handleOpenPopup}
          onBasketDataChange={handleBasketDataChange}
        />
        <Footer />

        <Popups
          isOpened={isPopupOpen}
          onClose={handleClosePopup}
          cardData={cardData}
          addToBasket={basketData?.addToBasket}
          isAdded={
            cardData && basketData
              ? basketData.addedItems.includes(cardData.id)
              : false
          }
          currentQuantity={
            cardData && basketData
              ? basketData.basketData.find((item) => item.id === cardData.id)
                  ?.quantity || 1
              : 1
          }
          updateQuantity={basketData?.updateQuantity}
        />
      </LabelProvider>
    </ErrorBoundary>
  );
};

export default App;
