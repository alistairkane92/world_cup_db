import React from 'react';
import './styles/MatchView.css'

import Goalscorers from './Goalscorers';
import Subs from './Subs'
import Cards from './Cards'

import filter from 'lodash/filter';

const MatchTeamPane = ({team, events, stats}) => {
  const goalsArr = filter(events, {"type_of_event": "goal"})
  const subsArr = filter(events, function(event){
    return event.type_of_event === "substitution-in" || event.type_of_event === "substitution-out"
  })

  const cardsArr = filter(events, function(event){
    return event.type_of_event === "yellow-card" || event.type_of_event === "red-card"
  })

  return(
    <div className="matchTeamPane">
      <div className="teamNameHeader">
        <h1>{team.country}</h1>
      </div>
      <Goalscorers goalEvents = {goalsArr}/>
      <Subs subEvents = {subsArr}/>
      <Cards cardEvents = {cardsArr}/>
    </div>
  )
}

export default MatchTeamPane;
