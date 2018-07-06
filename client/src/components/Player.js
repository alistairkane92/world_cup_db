import React from 'react';
import './styles/MatchView.css';

const Player = ({player, sub, cards}) => {
  if (!player) return null;

  let cap = null;
  let playerSub = null;
  let playerCards = [];

  const pText = (
    <p className="playerText">
      {player.shirt_number} - {player.name}
    </p>
  )

  if (player.captain){
    cap = (
      <p id="captain">
        (C)
      </p>
    )
  }

  if (sub){
    playerSub = (
      <p className="subText">
        ⇄ {sub.player}({sub.time})
      </p>
    )
  }

  if (cards.length > 0){
    cards.forEach(card => {
      const cardP = (
        <div key={card} className="card">
          <div className={card.type_of_event}> </div>
          <p>({card.time})</p>
        </div>
      )

      playerCards.push(cardP)
    })
  }

  return(
    <div className="player">
      <div className="playerEntry">{pText}{cap}{playerCards}</div>
      <div className="subDiv">{playerSub}</div>
    </div>
  )
}

export default Player;
