import React from "react";
import { Spinner } from "react-bootstrap";
import { Main } from "./Containers/Main";
import { About } from "./Containers/About";
import { Cards } from "./Components/Cards";
import Hero from "./Components/Hero";
import { Projects } from "./Containers/Projects";
import Navigation from "./Components/Navigation";

import { Footer } from "./Containers/Footer";

import "./styles/App.scss";

function App() {
  const [loading, setLoading] = React.useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  const imageLoader = (img) => {
    if (loading) {
      setTimeout(handleLoading, 3000);
      return (
        <Spinner
          animation="border"
          variant="primary"
          role="status"
          className="justify-content-center align-items-center align-self-center"
        />
      );
    } else {
      return img;
    }
  };

  return (
    <>
      <Navigation />
      <Main
        renderHero={() => <Hero imageLoader={imageLoader} />}
        renderProjects={() => <Projects imageLoader={imageLoader} />}
      >
        <About>
          <Cards />
        </About>
      </Main>
      <Footer />
    </>
  );
}

export default App;
