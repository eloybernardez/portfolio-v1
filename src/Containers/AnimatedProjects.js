import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import { m } from 'framer-motion'
import { Project } from '../Components/Project'
import { URLS } from '../utils/urls'

const AnimatedProjects = () => {
  const [loading, setLoading] = useState(true)
  const [loadingProjects, setLoadingProjects] = useState(true)
  const [PROJECTS, setProjects] = useState([])

  const fetchProjects = async (signal) => {
    try {
      const res = await fetch(URLS.PROJECTS_URL, { signal })
      const data = await res.json()

      if (!data || data.length === 0) {
        console.error('No techs found')
        setLoadingProjects(false)
        return
      }

      setProjects(data)
    } catch (e) {
      console.error(e.message)
    }
    setLoadingProjects(false)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const imageLoader = (img) => {
    if (loading) {
      setLoading(false)
      return (
        <Spinner
          animation="border"
          variant="primary"
          role="status"
          className="justify-content-center align-items-center align-self-center"
        />
      )
    }
    return img
  }

  const RefProjects = React.forwardRef((props, ref) => (
    <Container
      id="container-projects"
      fluid
      ref={ref}
      className="fadeUpAnimation opacityAnimation hide show"
    >
      {!loadingProjects ? (
        PROJECTS.length > 0 ? (
          PROJECTS.map((project, index) => (
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
          ))
        ) : (
          <h3>No projects found 😅</h3>
        )
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </Container>
  ))

  const MotionProjects = m(RefProjects)

  return (
    <MotionProjects
      initial={{ y: -15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
    />
  )
}

export default AnimatedProjects
