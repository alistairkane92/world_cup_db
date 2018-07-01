import React, { Component } from 'react';
import Match from './Match';

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
    const matches = [];

    this.state.matches.forEach(element => {
      matches.push(<Match matchInfo={element} key={element.fifa_id}/>)
    })

    return(
      <div>
        {matches}
      </div>
    )
  }
}

export default Country;
