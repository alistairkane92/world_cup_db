import React, { Component } from 'react';
import Match from './Match';
import MatchTable from './MatchTable';

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
      <MatchTable matches={this.state.matches}/>
    )
  }
}

export default Country;
