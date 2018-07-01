import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sortBy from 'lodash/sortBy'

class CountrySelect extends Component{
  constructor(props){
    super(props);
    this.state = {
      teams: null
    }
  }

  componentDidMount(){
    fetch("/teams/")
      .then(res => res.json())
      .then(data => this.setState({
        teams: data
      }))
  }

  render(){
    if (this.state.teams === null) return null;

    const sortedArr = sortBy(this.state.teams, [function(item) { return item.country}])

    const teamList = sortedArr.map(team => {
      const url = `/countries/${team.fifa_code}`

      return(
      <li key={team.fifa_code}>
        <Link to={url}>{team.country}</Link>
      </li>
      )
    })

    return(
      <ul>
        {teamList}
      </ul>
    )
  }
}
export default CountrySelect;
