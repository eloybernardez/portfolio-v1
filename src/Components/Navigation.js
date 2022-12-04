import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsList as List } from "react-icons/bs";
import "../styles/Navigation.scss";

const links = ["Home", "About Me", "Projects", "Contact"];

function Navigation() {
  const [, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  return (
    <header className="bg-dark pb-5">
      <Navbar
        collapseOnSelect
        expand="md"
        className="bg-dark rounded-bottom"
        fixed="top"
      >
        <Container className="text-white">
          <Navbar.Brand href="#home" className="text-white title  ">
            <span className="text-primary">&lt; </span>
            eloy.dev
            <span className="text-primary"> /&gt;</span>
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleShow} className="border border-0">
            <List className="text-primary" size={30} />
          </Navbar.Toggle>

          <Navbar.Collapse className="justify-content-end  ">
            <Nav className="bg-dark align-items-center ">
              {links.map((item, index) => (
                <Nav.Item
                  key={`Navigation-${index}`}
                  type="button"
                  eventKey={`#${item.toLowerCase()}`}
                  className="py-3 px-3 fw-bold text-white text-decoration-none fadeIn  "
                >
                  <Nav.Link
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-decoration-none fadeIn"
                  >
                    <span className="text-primary fw-bolder">/</span> {item}
                  </Nav.Link>
                </Nav.Item>
              ))}

              <h4 className="title d-md-none align-self-center fw-bolder ">
                <span className="text-primary px-2">&lt;</span> eloy.dev {""}
                <span className="text-primary">/&gt;</span>
              </h4>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
