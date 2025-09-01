import { FC, useState, useCallback } from "react";
import { LabelProvider } from "./components/common/LabelContext";
import Hero from "./components/features/Hero";
import Labels from "./components/features/Labels";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Popups from "./components/layout/Popups";
import { IPopupCardData, PopupType } from "./components/layout/Popups/types";
import { IBasketData } from "./types/basket";

const App: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<PopupType>(PopupType.PRODUCT);
  const [cardData, setCardData] = useState<IPopupCardData | undefined>(
    undefined
  );
  const [basketData, setBasketData] = useState<IBasketData | null>(null);

  const handleOpenPopup = (data: IPopupCardData) => {
    setCardData(data);
    setPopupType(PopupType.PRODUCT);
    setIsPopupOpen(true);
  };

  const handleOpenDeliveryPopup = () => {
    setPopupType(PopupType.DELIVERY);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setCardData(undefined);
  };

  const handleBasketDataChange = useCallback((data: IBasketData) => {
    setBasketData(data);
  }, []);

  return (
    <ErrorBoundary>
      <LabelProvider>
        <Hero />
        <Labels />
        <Main
          onOpenPopup={handleOpenPopup}
          onOpenDeliveryPopup={handleOpenDeliveryPopup}
          onBasketDataChange={handleBasketDataChange}
        />
        <Footer />

        <Popups
          isOpened={isPopupOpen}
          onClose={handleClosePopup}
          popupType={popupType}
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
