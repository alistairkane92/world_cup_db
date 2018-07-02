import React, { Component } from 'react';
import MatchTable from './MatchTable'
import "./styles/Match.css";

class Matches extends Component{
  constructor(props){
    super(props);
    this.state = {
      wCup: null
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
    if (this.state.wCup === null) return null;
    return (
      <div id="background">
        <MatchTable matches={this.state.wCup}/>
      </div>
    )
  }

  // assignFlag(){
  //   this.state.wCup.forEach(match => {
  //     this.state.countries.forEach(function(country){
  //       if (match.home_team.country === country.name){
  //         match.home_team["flag"] = country.flag
  //       }
  //
  //       if (match.away_team.country === country.name){
  //         match.away_team["flag"] = country.flag
  //       }
  //     })
  //   })
  //
  //   console.log("finito", this.state.wCup);
  // }
}

export default Matches;
