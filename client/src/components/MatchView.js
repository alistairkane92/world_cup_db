import React, { Component } from 'react';
import MatchTeamPane from './MatchTeamPane.js';
import MatchDetails from './MatchDetails.js';
import './styles/MatchView.css';

class MatchView extends Component {
  constructor(props){
    super(props);
    this.state = {
      match: null
    }
  }

  componentDidMount(){
    const fifaCodeParams = this.props.match.params.id;
    const url = `/matches/${fifaCodeParams}`
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({
        match: data
      }))
  }

  render(){
    if (this.state.match === null) return null;

    const {attendance, home_team, home_team_events, home_team_statistics, away_team, away_team_events, away_team_statistics, datetime, location, officials, stage_name, venue, weather} = this.state.match[0];

    const formattedTime = new Date(datetime).toLocaleString('en-GB');

    const homeScore = home_team.goals;
    const awayScore = away_team.goals
    return(
      <div id="matchView">
        <MatchTeamPane team={home_team} events={home_team_events} stats={home_team_statistics}/>
        <MatchDetails homeScore={homeScore} awayScore={awayScore} attendance={attendance} date={formattedTime} location={location} officials={officials} stage={stage_name} venue={venue} weather={weather}/>
        <MatchTeamPane team={away_team} events={away_team_events} stats={away_team_statistics}/>
      </div>
    )
  }
}

export default MatchView;
