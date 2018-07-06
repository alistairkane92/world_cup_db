import React from 'react';

const Cards = (props) => {
  const cardsList = props.cardEvents.map(event => (
    <p key={event.id}>{event.player} got a card</p>
  ))

  if (cardsList.length === 0) return null;
  
  return(
    <div className="cards">
      <p className="categoryHeader">Cards</p>
      {cardsList}
    </div>
  )
}

export default Cards;
