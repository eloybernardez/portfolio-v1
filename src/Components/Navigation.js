import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { BsList as List } from "react-icons/bs";
import "../styles/Navigation.scss";

const links = ["Home", "About Me", "Projects", "Contact"];

function Navigation() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  React.useEffect(() => {
    function observerEffect(section) {
      let target;

      function createObserver() {
        let options = {
          root: null,
          rootMargin: "-20px",
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
    <BrowserRouter>
      <header className="bg-dark">
        <Navbar collapseOnSelect expand="md" className="bg-dark ">
          <Container className="text-white ">
            <Navbar.Brand className="text-white title">
              <span className="text-primary">&lt; </span>
              eloy.dev
              <span className="text-primary"> /&gt;</span>
            </Navbar.Brand>

            <Navbar.Toggle onClick={handleShow} className="border border-0">
              <List className="text-primary" size={30} />
            </Navbar.Toggle>

            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
              className="bg-dark text-white "
            >
              <Offcanvas.Header
                closeButton
                closeVariant="white"
                className="bg-dark "
              />
              <Offcanvas.Body className="d-flex justify-content-md-end justify-content-center bg-dark">
                <Nav className="bg-dark ">
                  {links.map((item, index) => (
                    <Link
                      smooth
                      key={index}
                      to={`#${item.toLowerCase()}`}
                      onClick={handleClose}
                      className="text-decoration-none"
                    >
                      <Nav.Item
                        type="button"
                        className="py-3 px-3 fw-bold text-white text-decoration-none fadeIn "
                      >
                        <span className="text-primary fw-bolder">/</span> {item}
                      </Nav.Item>
                    </Link>
                  ))}

                  <h4 className="title d-sm-none align-self-center fw-bolder position-absolute bottom-0">
                    <span className="text-primary px-2">&lt;</span> eloy.dev{" "}
                    {""}
                    <span className="text-primary">/&gt;</span>
                  </h4>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </BrowserRouter>
  );
}

export default Navigation;
