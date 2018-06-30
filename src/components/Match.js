import React from 'react';
import "./Match.css"

const Match = ({matchInfo}) => {
  const {venue, location, status, time, fifa_id, weather, attendance, officials, stage_name, home_team_country, away_team_country, datetime, winner, home_team, away_team, home_team_events, away_team_events, home_team_statistics, away_team_statistics} = matchInfo;

  return(
  <div className="match">
    <li>Stage_name: {stage_name}</li>
    <li>{home_team_country} vs {away_team_country}</li>
    <li>Venue: {venue}</li>
    <li>Location: {location}</li>
    <li>Attendance: {attendance}</li>
    <li>Winner: {winner}</li>
  </div>
  )
}

export default Match;
