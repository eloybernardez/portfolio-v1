import React from "react";

import { Container, Navbar } from "react-bootstrap";

import { List } from "react-bootstrap-icons";

import { NavLinks } from "./NavLinks";
import "../styles/Navigation.scss";

function Navigation() {
  return (
    <header className="bg-dark ">
      <Navbar collapseOnSelect expand="md" className="bg-dark ">
        <Container className="text-white ">
          <Navbar.Brand className="text-white title">
            <span className="text-primary">&lt; </span>
            eloy.dev
            <span className="text-primary"> /&gt;</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-toggle"
            className="border border-0"
          >
            <List className="text-primary  " size={30} />
          </Navbar.Toggle>

          <Navbar.Offcanvas id="navbar-toggle" className="bg-dark text-white ">
            <NavLinks />
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
