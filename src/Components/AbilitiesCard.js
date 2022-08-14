import React from "react";
import { Card } from "react-bootstrap";
import "../styles/AbilitiesCard.scss";

function AbilitiesCard({ icon, title, abilities }) {
  return (
    <Card className="border border-0 py-3 justify-content-center align-items-center bg-dark text-white w-100">
      {icon}
      <Card.Body>
        <Card.Title className="fw-bolder ">
          <span className="text-secondary fw-bolder tilt">/ </span>
          {title}
        </Card.Title>
        {abilities.map((abilitie, index) => (
          <Card.Text className=" mb-0 " key={index}>
            <span className="text-secondary fw-bolder">+</span> {abilitie}
          </Card.Text>
        ))}
      </Card.Body>
    </Card>
  );
}

export { AbilitiesCard };
