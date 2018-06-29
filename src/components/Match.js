import React from 'react';

const Match = ({matchInfo}) => {
  const {venue, location, status, time, fifa_id, weather, attendance, officials, stage_name, home_team_country, away_team_country, datetime, winner, home_team, away_team, home_team_events, away_team_events, home_team_statistics, away_team_statistics} = matchInfo

  console.log("Venue", matchInfo);

  return(
  <li>{venue}</li>
  )
}

export default Match;
