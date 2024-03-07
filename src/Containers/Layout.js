import React from 'react'
import { Main } from './Main'
import { About } from './About'
import { Cards } from '../Components/Cards'
import Hero from '../Components/Hero'
import { Projects } from './Projects'
import Navigation from '../Components/Navigation'
import { Footer } from './Footer'

const Layout = () => {
  return (
    <>
      <Navigation />
      <Main renderHero={() => <Hero />} renderProjects={() => <Projects />}>
        <About>
          <Cards />
        </About>
      </Main>
      <Footer />
    </>
  )
}

export default Layout
