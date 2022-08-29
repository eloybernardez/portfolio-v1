import React from "react";
import { Stack, Button, Container, Row, Col } from "react-bootstrap";
import { m, useMotionValue, useTransform } from "framer-motion";

import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
  FaGithub as Github,
} from "react-icons/fa";

import { FiChevronsRight as ChevronDoubleRight } from "react-icons/fi";

import "../styles/Hero.scss";

function Hero() {
  const x = useMotionValue(0);
  const zIndex = useTransform(x, [0, -450, 0, 400], [1, 0, 0, 0]);
  return (
    <Stack className="pt-4 bg-dark text-white vh-100" gap={4}>
      <Container>
        <Row>
          <Col className="justify-content-evenly mb-4 ">
            <m.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center display-1 fw-bold"
            >
              <span className="text-primary">Hi!</span> I'm <br></br> Eloy
              Bernardez.
            </m.h2>

            <m.p
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="px-5 text-center fs-5 "
            >
              I’m a <span className="text-primary ">FrontEnd Dev. Trainee</span>{" "}
              looking my first job in IT.
            </m.p>

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
                className="btn-outline-primary border-0 fw-bolder text-decoration-none text-white"
                type="button"
                variant="light"
                href="#projects"
              >
                Projects
                <ChevronDoubleRight
                  size={18}
                  className="arrows text-secondary vertical-align-sub"
                />
              </Button>
            </Stack>

            <Stack
              className="pt-5 pb-3 justify-content-center"
              direction="horizontal"
              gap={2}
            >
              <Button
                className="btn-social"
                type="button"
                variant="link"
                as="a"
                href="/"
              >
                <Facebook size={25} className="text-primary" />
              </Button>

              <Button
                className="btn-social"
                variant="link"
                type="button"
                as="a"
                href="https://www.instagram.com/eloy.bernardez"
              >
                <Instagram size={25} className="text-primary" />
              </Button>

              <Button
                className="btn-social"
                variant="link"
                type="button"
                as="a"
                href="https://www.linkedin.com/in/eloy-bernardez-b8474a154/"
              >
                <Linkedin size={25} className="text-primary" />
              </Button>

              <Button
                className="btn-social"
                variant="link"
                type="button"
                as="a"
                href="https://github.com/eloybernardez"
              >
                <Github size={25} className="text-primary" />
              </Button>
            </Stack>
          </Col>

          <Col className="d-none d-lg-flex justify-content-center align-items-center mb-4 ">
            <m.div
              initial={{ x: 0, y: 0, z: 0 }}
              animate={{
                x: [0, 200, 0],
                y: [0, 15, 0],
              }}
              transition={{ repeat: Infinity, duration: 10 }}
              className="astro red-supergiant"
            ></m.div>
            <m.div
              initial={{ x: 0, y: 0, z: 0 }}
              animate={{
                opacity: 1,
                x: [0, -450, 0, 400],
                y: [0, 100, 0, -100, 0],
                z: [0, 20, 0],
              }}
              style={{ x, zIndex }}
              transition={{ repeat: Infinity, duration: 10 }}
              className="astro white-dwarf"
            ></m.div>
          </Col>
        </Row>
      </Container>
    </Stack>
  );
}

export default Hero;
