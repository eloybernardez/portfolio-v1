import React from "react";
import { Card, Button, Stack } from "react-bootstrap";
import { AiOutlineCode as CodeSlash } from "react-icons/ai";
import { BsBoxArrowUpRight as BoxArrowUpRight } from "react-icons/bs";
import "../styles/Project.scss";

function Project({ project }) {
  return (
    <Card border="white" className="align-items-center justify-content-center ">
      <Card.Body className=" w-100 justify-content-center">
        <Card.Title className="fw-bolder">{project.title}</Card.Title>
        <Card.Subtitle className="text-secondary">
          {project.languages}
        </Card.Subtitle>
        <Card.Text className="py-2">{project.description}</Card.Text>
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-center align-items-center"
        >
          <Button
            className="border-0 btn-lg "
            as="a"
            href={project.code}
            variant="transparent"
          >
            <CodeSlash
              size={30}
              className="text-secondary project-btn"
            ></CodeSlash>
          </Button>
          <Button
            className="border-0 btn-lg project-btn "
            as="a"
            href={project.page}
            variant="transparent"
          >
            <BoxArrowUpRight
              size={30}
              className="text-secondary project-btn"
            ></BoxArrowUpRight>
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export { Project };
