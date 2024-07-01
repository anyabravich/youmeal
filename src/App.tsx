import React from "react";
import { LabelProvider } from "./components/LabelContext";
import Hero from "./components/Hero";
import Labels from "./components/Labels";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <LabelProvider>
      <Hero />
      <Labels />
      <Main />
    </LabelProvider>
  );
};

export default App;
