import React from 'react'
import { Container } from 'react-bootstrap'
import { BsListCheck as ListCheck } from 'react-icons/bs'
import {
  FaBrain as GearFill,
  FaPeopleCarry as PeopleFill
} from 'react-icons/fa'
import { CardsCarousel } from './CardsCarousel'
import { CardsStack } from './CardsStack'

const cards = [
  {
    icon: <PeopleFill size={50} className="text-primary" />,
    title: 'Teacher',
    abilities: ['Leader', 'Team Player']
  },
  {
    icon: <GearFill size={50} className="text-primary" />,
    title: 'Curious',
    abilities: ['Critical Thinker', 'Self-taught']
  },
  {
    icon: <ListCheck size={50} className="text-primary" />,
    title: 'Discipled',
    abilities: ['Organized', 'Responsible']
  }
]

const Cards = () => {
  return (
    <Container className="mb-4">
      <CardsCarousel cards={cards} />
      <CardsStack cards={cards} />
    </Container>
  )
}

export { Cards }
