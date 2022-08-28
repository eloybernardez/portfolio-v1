import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BsFillEnvelopeFill as Envelope,
  BsWhatsapp as Whatsapp,
} from "react-icons/bs";
import { m } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary">
      <Container fluid="sm">
        <m.h4
          initial={{ x: -15, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center fw-bolder display-5 pt-4"
        >
          Con
          <span className="border-bottom border-2 border-secondary">tact</span>
        </m.h4>

        <Row>
          <Col>
            <Container fluid="sm" className="my-4">
              <Row>
                <Col className="mb-2">
                  <Envelope size={30} className="text-secondary fw-bolder" />
                  <span className="px-2">eloy.ricardo.550@gmail.com</span>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Whatsapp size={30} className="text-secondary fw-bolder" />{" "}
                  {""} +54 9 11-2391-8543
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className="d-none d-md-flex justify-content-end align-items-center">
            <h4 className="title fw-bolder">
              <span className="text-secondary px-2">&lt;</span> eloy.dev {""}
              <span className="text-secondary">/&gt;</span>
            </h4>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
