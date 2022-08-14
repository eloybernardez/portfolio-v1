import React from "react";
import Hero from "../Components/Hero";
import { About } from "./About";
import { Cards } from "../Components/Cards";
import { Projects } from "./Projects";

const Main = () => {
  return (
    <main id="home">
      <Hero />
      <About id="about">
        <Cards />
      </About>
      <Projects />
    </main>
  );
};

export { Main };
