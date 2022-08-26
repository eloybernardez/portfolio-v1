import React from "react";
import { Stack, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ChevronDoubleRight,
} from "react-bootstrap-icons";

import "../styles/Hero.scss";

function Hero({ imageLoader }) {
  return (
    <Stack className="pt-4 bg-dark text-white" gap={4}>
      <Container>
        <Row>
          <Col className="justify-content-evenly mb-4 ">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center display-1 fw-bold"
            >
              <span className="text-primary">Hi!</span> I'm <br></br> Eloy
              Bernardez.
            </motion.h2>

            <motion.p
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5 text-center fs-5 "
            >
              I’m a <span className="text-primary ">FrontEnd Dev. Trainee</span>{" "}
              looking my first job in IT.
            </motion.p>

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

          <Col className="d-none d-md-flex justify-content-center align-items-center mb-4 ">
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={{
                x: [0, 25, 50, 100, 150, 200, 150, 100, 50, 25, 0],
                y: [0, 5, 10, 15, 10, 5, 0],
              }}
              transition={{ repeat: Infinity, duration: 10 }}
              className="astro red-supergiant"
            ></motion.div>
            <motion.div
              initial={{ x: 0, y: 0, z: 0 }}
              animate={{
                opacity: 1,

                x: [
                  0, -50, -100, -150, -200, -250, -300, -350, -400, -450, -400,
                  -350, -300, -250, -200, -150, -100, -50, -25, 0, 25, 50, 100,
                ],
                y: [
                  0, 25, 50, 75, 100, 75, 50, 25, 0, -25, -50, -75, -100, -75,
                  -50, -25, 0,
                ],
                z: [0, 5, 10, 15, 20, 15, 10, 5, 0],
              }}
              transition={{ repeat: Infinity, duration: 10 }}
              className="astro white-dwarf"
            ></motion.div>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
}

export default Hero;
