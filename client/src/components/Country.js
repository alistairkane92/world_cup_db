import React, { Component } from 'react'
import MatchTable from './MatchTable'
import CountryStats from './CountryStats'
import './styles/Country.css'

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: null
    }
  }

  componentDidMount(){
    const countryCode = this.props.match.params.name;
    const url = `/matches/country?fifa_code=${countryCode}`

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      matches: data
    }))
  }

  render(){
    if (this.state.matches === null) return null;

    return(
      <div id="country-div">
        <MatchTable matches={this.state.matches}/>
        <CountryStats/>
      </div>
    )
  }
}

export default Country
