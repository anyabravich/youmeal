import { FC } from "react";
import { LabelProvider } from "./components/LabelContext";
import Hero from "./components/Hero";
import Labels from "./components/Labels";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const App: FC = () => {
  return (
    <ErrorBoundary>
      <LabelProvider>
        <Hero />

        <Labels />

        <Main />

        <Footer />
      </LabelProvider>
    </ErrorBoundary>
  );
};

export default App;
