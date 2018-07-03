import React from 'react';
import './styles/MatchView.css'

import Goalscorers from './Goalscorers';
import Subs from './Subs'

import filter from 'lodash/filter';

const MatchTeamPane = ({team, events, stats}) => {
  const goalsArr = filter(events, {"type_of_event": "goal"})
  const subsArr = filter(events, function(o){
    return o.type_of_event === "substitution-in" || o.type_of_event === "substitution-out"
  })

  const cardsArr = filter(events, function(o){
    console.log("hiya", o.type_of_event);
    return o.type_of_event === "yellow-card" || o.type_of_event === "red-card"
  })

console.log(cardsArr);
  const cardsList = cardsArr.map(event => (
    <p key={event.id}>{event.player} got a card</p>
  ))

  return(
    <div className="matchTeamPane">
      <div className="teamNameHeader">
        <h1>{team.country}</h1>
      </div>
      <Goalscorers goalEvents = {goalsArr}/>
      <Subs subEvents = {subsArr}/>
      <div className="cards">
        {cardsList}
      </div>
    </div>
  )
}

export default MatchTeamPane;
