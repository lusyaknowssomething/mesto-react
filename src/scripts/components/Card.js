import React from "react";

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="element">
      <div className="element__pic-container">
        <img
          src={card.link}
          onClick={handleClick}
          alt={card.name}
          className="element__picture"
        />
      </div>
      <h2 className="element__title">{card.name}</h2>
      <div className="element__like-container">
        <button type="button" className="element__like"></button>
        <p className="element__like-number">{card.likes.length}</p>
      </div>
      <button type="button" className="element__delete"></button>
    </article>
  );
}

export default Card;
