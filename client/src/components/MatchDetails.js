import React from 'react';
import "./styles/MatchView.css";

const MatchDetails = ({homeScore, awayScore, attendance, formattedTime, location, officials, stage_name, venue, weather}) => (
  <div id="matchDetails">
    <div id="score">
      <div className="numberScore">
        <h1>{homeScore}</h1>
      </div>
      <div className="numberScore">
        <h1>{awayScore}</h1>
      </div>
    </div>
  </div>
)
export default MatchDetails;
