import React from "react";
import { Carousel } from "react-bootstrap";
import { AbilitiesCard } from "./AbilitiesCard";

const CardsCarousel = ({ cards }) => {
  return (
    <Carousel className="d-md-none" indicators={false}>
      {cards.map((card, index) => (
        <Carousel.Item className="px-2" key={`Card-${index}`}>
          <AbilitiesCard
            icon={card.icon}
            title={card.title}
            abilities={card.abilities}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export { CardsCarousel };
