import React from 'react'
import { m } from 'framer-motion'
import TechCarousel from '../Components/TechCarousel'
import '../styles/About.scss'

function About ({ children }) {
  return (
    <section id="about me" className="py-5 h-auto">
      <m.h3
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-5 fw-bolder display-5 text-center "
      >
        Abou
        <span className="border-bottom border-2 border-secondary ">t me</span>
      </m.h3>
      <m.div
        id="container-about"
        initial={{ x: 15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-5"
      >
        {children}
      </m.div>

      <m.h4
        initial={{ x: -15, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="fw-bold fs-2 text-center my-4"
      >
        <m.span
          initial={{ color: '#000', scale: 1 }}
          whileInView={{ color: '#cd5334', scale: 1.2 }}
          transition={{ duration: 1 }}
        >
          Tech{' '}
        </m.span>
        Stack
      </m.h4>

      <TechCarousel />
    </section>
  )
}

export { About }
