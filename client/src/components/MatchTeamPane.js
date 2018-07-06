import React from 'react';
import './styles/MatchView.css';

import Goalscorers from './Goalscorers';
import Lineup from './Lineup';

import filter from 'lodash/filter';

const MatchTeamPane = ({team, events, stats}) => {
  const goalsArr = filter(events, function(event){
    return event.type_of_event === "goal" || event.type_of_event === "goal-penalty"
    || event.type_of_event === "goal-own"
  })

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
      <Goalscorers goalEvents={goalsArr}/>
      <Lineup startingEleven={stats.starting_eleven} subEvents={subsArr} cardEvents={cardsArr}/>
    </div>
  )
}

export default MatchTeamPane;
