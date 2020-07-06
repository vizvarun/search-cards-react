import React from "react";
import "./card.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set/set&size=180x180`}
        alt="monster"
      />
      <h1 className="monsterName">{props.monster.name}</h1>
      <p className="monsterEmail">{props.monster.email}</p>
    </div>
  );
};

export default Card;
