import React from 'react';

const Cards = (props) => {
  const cardsList = props.cardEvents.map(event => (
    <p key={event.id}>{event.player} got a card</p>
  ))

  return(
    <div className="cards">
      {cardsList}
    </div>
  )
}

export default Cards;
