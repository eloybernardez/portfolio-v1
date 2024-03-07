import React from 'react'
import { m } from 'framer-motion'
import AnimatedProjects from './AnimatedProjects'
import '../styles/Projects.scss'

const Projects = () => {
  return (
    <section id="projects" className="py-5 px-3 bg-dark h-auto ">
      <m.h3
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center fw-bolder display-5 py-5 text-white"
      >
        Pro
        <span className="border-bottom border-2 border-secondary">jects</span>
      </m.h3>

      <AnimatedProjects />
    </section>
  )
}

export { Projects }
