import { FC } from "react";
import { LabelProvider } from "./components/LabelContext";
import Hero from "./components/Hero";
import Labels from "./components/Labels";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <LabelProvider>
      <Hero />

      <Labels />

      <Main />

      <Footer />
    </LabelProvider>
  );
};

export default App;
