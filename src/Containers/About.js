import React from "react";
import "../styles/About.scss";

function About({ children }) {
  return (
    <section id="about me" className="py-5 vh-100">
      <h3 className="pb-5 fw-bolder display-5 text-center ">
        Abou
        <span className="border-bottom border-2 border-secondary">t me</span>
      </h3>
      <div
        id="container-about"
        className="fadeUpAnimation opacityAnimation hide show"
      >
        {children}
      </div>
    </section>
  );
}

export { About };
