import React, { Component } from 'react';
import MatchHeading from './MatchHeading'
import Match from '../components/Match';
import { Link } from 'react-router-dom'

class MatchTable extends Component {
  constructor(props){
      super(props);
      this.state = {
        matchList: []
      }
    }

  componentDidMount(){
    const newMatches = [];
    newMatches.push(<MatchHeading key="matchHeader"/>)

    this.props.matches.forEach(function(element){
      let url = `/match/${element.fifa_id}`
      let newMatch = <Link to={url} style={{ textDecoration: 'none' }} key={element.fifa_id}><Match matchInfo={element} /></Link>
      newMatches.push(newMatch);
    })

    this.setState({matchList: newMatches})
  }

  render(){
    if(this.state.matchList.length === 0) return null;
    return (
      <div id="table">
        {this.state.matchList}
      </div>
    )
  }
}
export default MatchTable;
