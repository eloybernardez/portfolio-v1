import React from 'react'
import { Card, Button, Stack, Badge } from 'react-bootstrap'
import { AiOutlineCode as CodeSlash } from 'react-icons/ai'
import { BsBoxArrowUpRight as BoxArrowUpRight } from 'react-icons/bs'
import '../styles/Project.scss'

function Project({ project }) {
  return (
    <Card border="white" className="align-items-center justify-content-center ">
      <Card.Body className="w-100 justify-content-center">
        <Card.Title className="fw-bolder">
          {project.title}{' '}
          <Badge
            bg={`${project.state === 'finished' ? 'primary' : 'warning'}`}
            className="text-dark"
          >
            {`${project.state === 'finished' ? 'Completed' : 'In progress'}`}
          </Badge>
        </Card.Title>

        <Card.Subtitle className="text-secondary">
          {project.languages}
        </Card.Subtitle>
        <Card.Text className="py-2">{project.description}</Card.Text>
        {project.instructions ? (
          <Card.Text className="py-2">
            <span className="text-dark fw-bold">Instructions: </span>
            {project.instructions}
          </Card.Text>
        ) : null}

        <Stack
          direction="horizontal"
          gap={3}
          className="px-3 px-md-0 justify-content-between justify-content-md-center align-items-md-center"
        >
          <Button
            className="border-0 btn-lg project-btn"
            as="a"
            href={project.code}
            variant="transparent"
            aria-label="Code repository"
          >
            <span className="fs-6 text-secondary">Code</span>
            <CodeSlash size={33} className="ms-1 text-secondary"></CodeSlash>
          </Button>
          <Button
            className="border-0 btn-lg project-btn"
            as="a"
            href={project.page}
            variant="transparent"
            aria-label="Project page"
          >
            <span className="fs-6 text-secondary">Project</span>
            <BoxArrowUpRight
              size={29}
              className="ms-1 text-secondary"
            ></BoxArrowUpRight>
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export { Project }
