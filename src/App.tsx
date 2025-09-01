import { FC } from "react";
import { LabelProvider } from "./components/common/LabelContext";
import Hero from "./components/features/Hero";
import Labels from "./components/features/Labels";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Popups from "./components/layout/Popups";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <LabelProvider>
        <Hero />
        <Labels />
        <Main />
        <Footer />

        <Popups />
      </LabelProvider>
    </ErrorBoundary>
  );
};

export default App;
