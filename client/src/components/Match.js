import React from 'react';
import "./styles/Match.css"

const Match = ({matchInfo}) => {
  const {venue, location, datetime, attendance, stage_name, home_team_country, away_team_country, winner} = matchInfo;

  const formattedTime = new Date(datetime).toLocaleString('en-GB');
  console.log(formattedTime);

  return(
  <div className="match">
    <div className="column">{formattedTime}</div>
    <div className="column">{stage_name}</div>
    <div className="column">{home_team_country} vs {away_team_country}</div>
    <div className="column">{location}</div>
    <div className="column">{attendance}</div>
    <div className="column">{winner}</div>
  </div>
  )
}

export default Match;
