import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Project } from "../Components/Project";
import "../styles/Projects.scss";

const projects = [
  {
    title: "Bankist App",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/bankist-opt.webp"),
    description:
      "App where you can transfer money to another account and request a loan to the bank.",
    code: "https://github.com/eloybernardez/bankist-react-app",
    page: "https://bankist-react-mxsxir5ze-eloybernardez.vercel.app",
  },
  {
    title: "Next.js Shop",
    languages: "HTML / CSS / JS / Next.js",
    preview: require("../images/next-shop-opt.webp"),
    description:
      "E-commerce where you can add / remove products. You can also filter products by categories.",
    code: "https://github.com/eloybernardez/next-shop",
    page: "https://next-shop-omega.vercel.app/",
  },
  {
    title: "Todo Machine",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/todo1.webp"),
    description:
      "A TODO machine where you can add / complete / remove TODOS. Also, you can search for a specific TODO using the search bar.",
    code: "https://github.com/eloybernardez/todo-machine",
    page: "https://eloybernardez.github.io/todo-machine/",
  },
];

const Projects = ({ imageLoader }) => {
  return (
    <section id="projects" className="py-5 px-3 bg-dark h-auto ">
      <motion.h3
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center fw-bolder display-5 py-5 text-white"
      >
        Pro
        <span className="border-bottom border-2 border-secondary">jects</span>
      </motion.h3>

      <Container
        id="container-projects"
        fluid
        className="fadeUpAnimation opacityAnimation hide show"
      >
        {projects.map((project, index) => (
          <Row
            key={`Project-${index}`}
            className="mb-3 bg-white border rounded "
          >
            {index % 2 === 0 ? (
              <>
                <Col
                  className={`justify-content-center align-items-center align-self-center col-12 col-sm-6 `}
                >
                  {imageLoader(
                    <Image
                      rounded
                      className="w-100 h-100 py-2"
                      fluid
                      src={project.preview}
                    />
                  )}
                </Col>
                <Col
                  className={`justify-content-center align-self-center align-items-center col-12 col-sm-6`}
                >
                  <Project project={project} />
                </Col>
              </>
            ) : (
              <>
                <Col
                  className={`justify-content-center align-self-center align-items-center col-12 col-sm-6 order-1 `}
                >
                  <Project project={project} />
                </Col>
                <Col
                  className={`justify-content-center align-self-center align-items-center col-12 col-sm-6 order-0 order-sm-1 py-2`}
                >
                  {imageLoader(
                    <Image
                      rounded
                      fluid
                      className="w-100 h-100"
                      src={project.preview}
                    />
                  )}
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export { Projects };
