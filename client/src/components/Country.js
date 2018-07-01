import React, { Component } from 'react';

class Country extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: null
    }
  }

  componentDidMount(){
    //make request to APIs here
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

    console.log(this.state.matches);
    return(
      <h1>{this.state.matches[0].home_team_country}</h1>
    )
  }
}

export default Country;
