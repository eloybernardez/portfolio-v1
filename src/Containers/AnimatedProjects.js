import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { m } from "framer-motion";
import { Project } from "../Components/Project";

const PROJECTS_URL = 'https://api-node-two-xi.vercel.app/projects'

const AnimatedProjects = () => {
  const [loading, setLoading] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [PROJECTS, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(PROJECTS_URL)
      const data = await res.json()
      setProjects(data)
      setLoadingProjects(false)
      } catch(e) {
        console.error(e.message)
      }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const imageLoader = (img) => {
    if (loading) {
      setLoading(false);
      return (
        <Spinner
          animation="border"
          variant="primary"
          role="status"
          className="justify-content-center align-items-center align-self-center"
        />
      );
      }
      return img;
  };
  

  const RefProjects = React.forwardRef((props, ref) => (
    <Container
      id="container-projects"
      fluid
      ref={ref}
      className="fadeUpAnimation opacityAnimation hide show"
    >
      {!loadingProjects ? PROJECTS.map((project, index) => (
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
                    alt={project.alt}
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
      )) : null}
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
