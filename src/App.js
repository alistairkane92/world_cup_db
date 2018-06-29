import React, { Component } from 'react';
import Matches from "./containers/Matches";
import "./index.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiData: []
    }
  }

  componentDidMount(){
    fetch('http://worldcup.sfg.io/matches')
    .then(res => res.json())
    .then(data => this.setState({
      apiData: data
    }))
  }

  render() {
    return (
      <div className="App" >
        <Matches allMatches={this.state.apiData}/>
      </div>
    );
  }
}

export default App;
