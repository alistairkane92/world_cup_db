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
      countriesModels: null
    }
  }

  componentDidMount(){
    fetch('http://worldcup.sfg.io/matches')
    .then(res => res.json())
    .then(wCupData => this.setState({
      wCup: wCupData
    }))

    fetch('https://restcountries.eu/rest/v2/alpha/{element.home_team.code}')
    .then(res => res.json())
    .then(countriesData => this.setState({
      this.state.countries.push(countriesData)
    }))

    // if (this.state.wCup && this.state.countries){
    //   this.state.wCup.forEach(function(match){
    //
    //   })
    // }
  }

  render() {
    console.log(this.state.countries);
    return (
      <div className="App" >
        <Matches allMatches={this.state.wCup} countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
