import React, { useState, useEffect } from 'react'
import { Accordion, Spinner } from 'react-bootstrap'
import { icons } from '../utils/icons'
import { URLS } from '../utils/urls'

const TechCarousel = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTechs = async () => {
    const techs = []

    try {
      const res = await fetch(URLS.TECH_URL)
      const data = await res.json()

      if (!data || data.length === 0) {
        console.error('No techs found')
        setLoading(false)
        return
      }

      data.forEach((tech, index) => {
        techs.push({
          icon: icons[index].icon,
          title: tech.title,
          text: tech.text
        })
      })

      setTechs(techs)
    } catch (e) {
      console.error(e.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchTechs()
  }, [])

  return (
    <Accordion className="px-4">
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : techs.length > 0 ? (
        techs.map((tech, index) => (
          <Accordion.Item key={`Tech-${index}`} eventKey={`${index}`}>
            <Accordion.Header className="d-flex align-items-center">
              {tech.icon}
              <p className="my-0 mx-2 fw-bold">{tech.title}</p>
            </Accordion.Header>
            <Accordion.Body className="fw-regular">{tech.text}</Accordion.Body>
          </Accordion.Item>
        ))
      ) : (
        <h3>No tech stack found 😅</h3>
      )}
    </Accordion>
  )
}

export default TechCarousel
