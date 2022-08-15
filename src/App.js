import React from "react";
import Navigation from "./Components/Navigation";

import { Footer } from "./Containers/Footer";
import { Main } from "./Containers/Main";

import "./styles/App.scss";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <Footer />
    </>
  );
}

export default App;
