import React from "react";
import { Stack, Button, Image, Container, Row, Col } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ChevronDoubleRight,
} from "react-bootstrap-icons";
import "../styles/Hero.scss";

function Hero() {
  return (
    <Stack className="pt-4 bg-dark text-white" gap={4}>
      <Container>
        <Row>
          <Col className="justify-content-evenly mb-4 ">
            <h2 className="text-center display-1 fw-bold">
              <span className="text-primary">Hi!</span> I'm <br></br> Eloy
              Bernardez.
            </h2>

            <p className="px-5 text-center fs-5 ">
              I’m a <span className="text-primary ">FrontEnd Dev. Trainee</span>{" "}
              looking my first job in IT.
            </p>

            <Stack
              className="pt-4 justify-content-center"
              direction="horizontal"
              gap={2}
            >
              <Button
                className="fw-bolder text-white"
                type="button"
                href="#contact"
                variant="secondary"
              >
                Contact me!
              </Button>
              <Button
                className="fw-bolder text-decoration-none text-white"
                type="button"
                variant="link"
                href="#projects"
              >
                Projects
                <ChevronDoubleRight size={18} className="text-secondary " />
              </Button>
            </Stack>

            <Stack
              className="pt-5 pb-3 justify-content-center"
              direction="horizontal"
              gap={2}
            >
              <Button variant="link" type="button" as="a" href="/">
                <Facebook size={25} className="text-primary" />
              </Button>

              <Button variant="link" type="button" as="a" href="/">
                <Instagram size={25} className="text-primary" />
              </Button>

              <Button
                variant="link"
                type="button"
                as="a"
                href="https://www.linkedin.com/in/eloy-bernardez-b8474a154/"
              >
                <Linkedin size={25} className="text-primary" />
              </Button>

              <Button variant="link" type="button" as="a" href="/">
                <Github size={25} className="text-primary" />
              </Button>
            </Stack>
          </Col>

          <Col className="d-none d-md-flex justify-content-center align-items-center mb-4">
            <Image
              fluid
              rounded
              alt="Eloy's photo"
              src={require("../images/foto-dni-opt.webp")}
            />
          </Col>
        </Row>
      </Container>
    </Stack>
  );
}

export default Hero;
