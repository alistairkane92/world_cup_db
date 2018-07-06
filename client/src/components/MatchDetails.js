import React from 'react';
import ScoreBoard from './ScoreBoard'
import "./styles/MatchView.css";

const MatchDetails = ({homeScore, awayScore, attendance, formattedTime, location, officials, stage_name, venue, weather}) => (
  <div id="matchDetails">
    <ScoreBoard homeScore={homeScore} awayScore={awayScore}/>

  </div>
)
export default MatchDetails;
