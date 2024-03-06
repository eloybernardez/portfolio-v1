import React, { useState, useEffect } from 'react'
import { Accordion, Spinner } from 'react-bootstrap'
import {
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiMaterialui,
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiAngular,
  SiMicrosoftsqlserver,
  SiDotnet
} from 'react-icons/si'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
import { ImHtmlFive, ImCss3, ImGit } from 'react-icons/im'

const icons = [
  {
    icon: <ImHtmlFive size={50} color="rgb(229,76,33)" />
  },
  {
    icon: <ImCss3 size={50} color="rgb(33,76,229)" />
  },
  {
    icon: <SiJavascript size={50} color="rgb(252,220,0)" className="bg-black" />
  },
  {
    icon: <SiJquery size={50} color="rgb(0,187,255)" />
  },
  {
    icon: <SiAngular size={50} color="rgb(204,0,0)" />
  },
  {
    icon: <SiReact size={50} color="rgb(65,224,253)" />
  },

  {
    icon: <SiRedux size={50} color="rgb(175,135,239)" />
  },

  {
    icon: <SiNextdotjs size={50} color="rgb(0,0,0)" />
  },

  {
    icon: <SiBootstrap size={50} color={'rgb(117, 50, 249)'} />
  },

  {
    icon: <SiMaterialui size={50} color={'rgb(0,127,255)'} />
  },

  {
    icon: <SiTailwindcss size={50} color="rgb(56,189,248)" />
  },

  {
    icon: (
      <>
        <FaLessThan size={15} color="#000" />
        <h4 className="fs-3">💅</h4>
        <FaGreaterThan size={15} color="#000" />
      </>
    )
  },
  {
    icon: <SiDotnet size={50} color="rgb(0,99,177)" />
  },
  {
    icon: <SiMicrosoftsqlserver size={50} color="rgb(0,120,215)" />
  },
  {
    icon: <ImGit size={50} color="rgb(240,80,48)" />
  }
]

const TECH_URL = 'https://apiportfolio-dev-efaq.3.us-1.fl0.io/techs'

const TechCarousel = () => {
  const [techs, setTechs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTechs = async () => {
    const techs = []

    try {
      const res = await fetch(TECH_URL)
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
