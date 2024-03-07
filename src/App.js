import React from 'react'
import Layout from './Containers/Layout'
import { LazyMotion, domAnimation } from 'framer-motion'
import './styles/App.scss'

function App () {
  return (
    <LazyMotion features={domAnimation}>
      <Layout />
    </LazyMotion>
  )
}

export default App
