import React, { Component } from 'react';
import Matches from "./containers/Matches";
import Home from "./containers/Home";

import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} className="homeRoute"/>
          <Route exact path="/matches" component={Matches} className="matches"/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
