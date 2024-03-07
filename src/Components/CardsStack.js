import React from 'react'
import { Stack } from 'react-bootstrap'
import { AbilitiesCard } from './AbilitiesCard'

const CardsStack = ({ cards }) => {
  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-md-flex d-none justify-content-around"
    >
      {cards.map((card, index) => (
        <AbilitiesCard
          key={index}
          icon={card.icon}
          title={card.title}
          abilities={card.abilities}
        />
      ))}
    </Stack>
  )
}

export { CardsStack }
