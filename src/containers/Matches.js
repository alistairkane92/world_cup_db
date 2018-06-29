import React from 'react';
import Match from '../components/Match'

const Matches = (props) => {
  let matches = [];

  if (props.allMatches.length !== 0){
    console.log("Props: ", props.allMatches);

    props.allMatches.forEach(function(element){
      matches.push(<Match matchInfo={element}/>)
    })

    console.log("Matches: ", matches);

    // const {venue, location, status, time, fifa_id, weather, attendance, officials, stage_name, home_team_country, away_team_country, datetime, winner, home_team, away_team, home_team_events, away_team_events, home_team_statistics, away_team_statistics} = props.allMatches[0];
  }

  return (
    <ul>{matches}</ul>
  )
}

export default Matches;
