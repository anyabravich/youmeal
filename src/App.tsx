import { FC, useState } from "react";
import { LabelProvider } from "./components/common/LabelContext";
import Hero from "./components/features/Hero";
import Labels from "./components/features/Labels";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Popups from "./components/layout/Popups";

const App: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <ErrorBoundary>
      <LabelProvider>
        <Hero />
        <Labels />
        <Main onOpenPopup={() => setIsPopupOpen(true)} />
        <Footer />

        <Popups isOpened={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </LabelProvider>
    </ErrorBoundary>
  );
};

export default App;
