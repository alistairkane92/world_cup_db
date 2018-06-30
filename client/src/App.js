import React, { Component } from 'react';
import Matches from "./containers/Matches";
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
          <Route exact path="/" component={Matches} className="homeRoute"/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
