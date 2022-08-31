import React from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { m } from "framer-motion";
import { Project } from "../Components/Project";

const PROJECTS = [
  {
    title: "Bankist App",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/bankist-v2-opt.webp"),
    alt: "Bankist App",
    description:
      "App where you can transfer money to another account and request a loan to the bank.",
    code: "https://github.com/eloybernardez/bankist-react-app",
    page: "https://bankist-react-app.vercel.app/",
  },
  {
    title: "Next.js Shop",
    languages: "HTML / CSS / JS / Next.js",
    preview: require("../images/next-shop-opt.webp"),
    alt: "Next.js Shop",
    description:
      "E-commerce where you can add / remove products. You can also filter products by categories.",
    code: "https://github.com/eloybernardez/next-shop",
    page: "https://next-shop-omega.vercel.app/",
  },
  {
    title: "Todo Machine",
    languages: "HTML / CSS / JS / React",
    preview: require("../images/todos-v2-opt.webp"),
    alt: "Todo Machine",
    description:
      "A TODO machine where you can add / complete / remove TODOS. Also, you can search for a specific TODO using the search bar.",
    code: "https://github.com/eloybernardez/todo-machine",
    page: "https://todo-machine-ecru.vercel.app/",
  },
];

const AnimatedProjects = () => {
  const [loading, setLoading] = React.useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  const imageLoader = (img) => {
    if (loading) {
      setTimeout(handleLoading, 2000);
      return (
        <Spinner
          animation="border"
          variant="primary"
          role="status"
          className="justify-content-center align-items-center align-self-center"
        />
      );
    } else {
      return img;
    }
  };

  const RefProjects = React.forwardRef((props, ref) => (
    <Container
      id="container-projects"
      fluid
      ref={ref}
      className="fadeUpAnimation opacityAnimation hide show"
    >
      {PROJECTS.map((project, index) => (
        <Row key={`Project-${index}`} className="mb-3 bg-white border rounded ">
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
                    alt={project.alt}
                  />
                )}
              </Col>
            </>
          )}
        </Row>
      ))}
    </Container>
  ));

  const MotionProjects = m(RefProjects);

  return (
    <MotionProjects
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    />
  );
};

export default AnimatedProjects;