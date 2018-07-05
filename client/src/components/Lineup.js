import React from 'react';
import Player from './Player';

const Lineup = (props) => {
    //figure out order of subEvents coming from API
    const inFirst = props.subEvents[0].type_of_event === "substitution-in";

    const lineUp = props.startingEleven.map(player => {
      let sub = null;

      props.subEvents.forEach(event => {
        if (event.player === player.name){
          let subIndex = 0;
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

      return(<Player player={player} sub={sub} key={player.shirt_number}/>)
    })

    return(
    <div>
      <div className="lineUpHeader">
        <h2>Lineup</h2>
      </div>
      <div className="lineUp">
        {lineUp}
      </div>
    </div>
    )

}

export default Lineup;
