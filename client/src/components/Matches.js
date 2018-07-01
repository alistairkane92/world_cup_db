import React, { Component } from 'react';
import Match from '../components/Match';
import MatchHeading from './MatchHeading'

class Matches extends Component{
  constructor(props){
    super(props);
    this.state = {
      wCup: []
    }
  }

  componentDidMount(){
    fetch('http://worldcup.sfg.io/matches?details=false')
    .then(res => res.json())
    .then(wCupData => this.setState({
      wCup: wCupData
    }))
  }

  render(){
    const matches = [];

    if(this.state.wCup.length > 0){
      this.state.wCup.forEach(function(element){
        let newMatch = <Match matchInfo={element} key={element.fifa_id}/>
        matches.push(newMatch)
      })
    }

    return (
      <div id="table">
        <MatchHeading/>
        {matches}
      </div>
    )
  }

  assignFlag(){
    this.state.wCup.forEach(match => {
      this.state.countries.forEach(function(country){
        if (match.home_team.country === country.name){
          match.home_team["flag"] = country.flag
        }

        if (match.away_team.country === country.name){
          match.away_team["flag"] = country.flag
        }
      })
    })

    console.log("finito", this.state.wCup);
  }
}

export default Matches;
