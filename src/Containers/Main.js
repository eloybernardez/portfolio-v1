import React from 'react'
import '../styles/Main.scss'

const Main = (props) => {
  return (
    <main className="overflow-hidden">
      {props.renderHero()}
      {props.children}
      {props.renderProjects()}
    </main>
  )
}

export { Main }
