import React from "react";

const Main = (props) => {
  return (
    <main id="home">
      {props.renderHero()}
      {props.children}
      {props.renderProjects()}
    </main>
  );
};

export { Main };
