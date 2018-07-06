import React from 'react'

const ScoreBoard = (props) => (
  <div id="scoreBoard">
    <div id="score">
      <div className="numberScore">
        <h1>{props.homeScore}</h1>
      </div>
      <div className="numberScore">
        <h1>{props.awayScore}</h1>
      </div>
    </div>
  </div>
)

export default ScoreBoard;
