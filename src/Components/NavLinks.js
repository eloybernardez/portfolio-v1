import React from "react";
import { Nav, Offcanvas } from "react-bootstrap";
import "../styles/NavLinks.scss";

const links = ["Home", "About Me", "Projects", "Contact"];

const NavLinks = () => {
  React.useEffect(() => {
    function observerEffect(section) {
      let target;

      function createObserver() {
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        };

        let callback = (entries) => {
          entries.forEach((entry) => {
            entry.isIntersecting &&
              entry.intersectionRatio < 0.5 &&
              target.classList.remove("hide");
          });
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(target);
      }

      function runObserver(section) {
        target = document.getElementById(`container-${section}`);
        createObserver();
      }

      window.addEventListener("load", () => {
        runObserver(section);
      });

      return () =>
        window.removeEventListener("load", () => {
          runObserver(section);
        });
    }
    observerEffect("projects");
    observerEffect("about");
  }, []);

  return (
    <>
      <Offcanvas.Header closeButton closeVariant="white" className="bg-dark " />
      <Offcanvas.Body className="d-flex justify-content-md-end justify-content-center  bg-dark">
        <Nav className="bg-dark ">
          {links.map((item, index) => (
            <Nav.Item
              key={index}
              as="a"
              href={`#${item.toLowerCase()}`}
              className="py-3 px-3 fw-bold text-white text-decoration-none fadeIn "
            >
              <span className="text-primary fw-bolder">/</span> {item}
            </Nav.Item>
          ))}
          <h4 className="title d-sm-none align-self-center fw-bolder position-absolute bottom-0">
            <span className="text-primary px-2">&lt;</span> eloy.dev {""}
            <span className="text-primary">/&gt;</span>
          </h4>
        </Nav>
      </Offcanvas.Body>
    </>
  );
};

export { NavLinks };
