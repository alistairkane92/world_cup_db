import React, { Component } from 'react';
import Matches from "./containers/Matches";
import "./index.css"
import Country from './models/Country';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      wCup: null,
      countries: null,
      // countriesModels: null
    }

    this.assignFlag = this.assignFlag.bind(this);
  }

  componentDidMount(){
    fetch('http://worldcup.sfg.io/matches')
    .then(res => res.json())
    .then(wCupData => this.setState({
      wCup: wCupData
    }))

    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(countriesData => this.setState({
      countries: countriesData
    }))
  }

  render() {
    if (this.state.wCup && this.state.countries){
      this.assignFlag();
    }

    return (
      <div className="App" >
        <Matches allMatches={this.state.wCup} countries={this.state.countries}/>
      </div>
    );
  }

  assignFlag(){
    this.state.wCup.forEach(function(match){
      this.state.countries.forEach(function(country){
        if (match.home_team.country === country.name){
          match.home_team["flag"] = country.flag
        }

        if (match.away_team.country === country.name){
          match.away_team["flag"] = country.flag
        }
      })
    }.bind(this))

    console.log("finito", this.state.wCup);
  }
}

export default App;
