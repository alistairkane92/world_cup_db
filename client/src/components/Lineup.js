import React from 'react';
import Player from './Player';

const Lineup = (props) => {
  const lineUp = props.startingEleven.map(player => {
    let sub = null;
    let cards = [];

    if(props.subEvents.length > 0){
      //figure out order of subEvents coming from API
      const inFirst = props.subEvents[0].type_of_event === "substitution-in";

      props.subEvents.forEach(event => {
        if (event.player === player.name){
          let subIndex = 0;
          //get the substitute event
          if (inFirst){
            subIndex = props.subEvents.indexOf(event) - 1;
          }else{
            subIndex = props.subEvents.indexOf(event) + 1;
          }

          const subEvent = props.subEvents[subIndex];

          sub = {
            player: subEvent.player,
            time: subEvent.time
          }
        }
      })
    }

    if (props.cardEvents){
      props.cardEvents.forEach(event => {
        if (event.player === player.name){
          cards.push(event);
        }
      })
    }

    return(<Player player={player} sub={sub} key={player.shirt_number} cards={cards}/>)
  })

  return(
    <div>
      <p className="categoryHeader">Lineup</p>
      <div className="lineUp">
        {lineUp}
      </div>
    </div>
  )

}

export default Lineup;
