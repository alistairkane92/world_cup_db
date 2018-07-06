import React from 'react';
import ScoreBoard from './ScoreBoard'
import MatchInfoPane from './MatchInfoPane'
import "./styles/MatchView.css";

const MatchDetails = ({homeScore, awayScore, attendance, kickOff, location, officials, stageName, venue, weather}) => (
  <div id="matchDetails">
    <ScoreBoard homeScore={homeScore} awayScore={awayScore}/>
    <MatchInfoPane attendance={attendance} kickOff={kickOff} location={location} officials={officials} stageName={stageName} venue={venue} weather={weather}/>
  </div>
)
export default MatchDetails;
