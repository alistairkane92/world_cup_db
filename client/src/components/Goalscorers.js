import React from 'react';

const GoalScorers = (props) => {
  if (!props.goalEvents) return null;
  
  const goalList = props.goalEvents.map(event => (
    <p key={event.id}>{event.player}({event.time}) scored</p>
  ))

  return(
    <div className="goalList">
      {goalList}
    </div>
  )
}

export default GoalScorers;
