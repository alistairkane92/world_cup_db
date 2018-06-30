import React from 'react';
import "./Match.css"

const Match = ({matchInfo}) => {
  const {venue, location, status, time, fifa_id, weather, attendance, officials, stage_name, home_team_country, away_team_country, datetime, winner, home_team, away_team, home_team_events, away_team_events, home_team_statistics, away_team_statistics} = matchInfo;

  return(
  <div className="match">
    <div className="column">{stage_name}</div>
    <div className="column">{home_team_country} vs {away_team_country}</div>
    <div className="column">{location}: {venue}</div>
    <div className="column">{attendance}</div>
    <div className="column">{winner}</div>
  </div>
  )
}

export default Match;
