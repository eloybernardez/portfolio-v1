import React from "react";
import { Carousel } from "react-bootstrap";
import { AbilitiesCard } from "./AbilitiesCard";

const CardsCarousel = ({ cards }) => {
  return (
    <Carousel className="d-md-none mb-5 ">
      {cards.map((card, index) => (
        <Carousel.Item key={`Card-${index}`}>
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
