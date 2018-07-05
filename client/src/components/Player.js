import React from 'react';
import './styles/MatchView.css';

const Player = (props) => {
  if(props.player.captain && props.sub) {
    return(
      <div className="player">
        <p className="playerText">
          {props.player.shirt_number} - {props.player.name} (C)
        </p>
        <p className="subText">
          ⇄ {props.sub.player}({props.sub.time})
        </p>
      </div>
    )
  }

  if(props.player && props.sub) {
    return(
      <div className="player">
        <p className="playerText">
          {props.player.shirt_number} - {props.player.name}
        </p>
        <p className="subText">
          ⇄ {props.sub.player}({props.sub.time})
        </p>
      </div>
    )
  }

  if(props.player.captain) {
    return(
      <div className="player">
        <p className="playerText">
          {props.player.shirt_number} - {props.player.name} (C)
        </p>
      </div>
    )
  }

  if(props.player) {
    return(
      <div className="player">
        <p className="playerText">
          {props.player.shirt_number} - {props.player.name}
        </p>
      </div>
    )
  }
}

export default Player;
