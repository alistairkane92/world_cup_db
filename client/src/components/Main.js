import React, { Component } from 'react'
import NavBar from './NavBar'
import Home from "./Home";
import Matches from "./Matches";
import MatchView from "./MatchView";
import Country from "./Country";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  render(){
    console.log("Main Renders");
    return(
      <div>
        <NavBar/>
        <Router>
          <React.Fragment>
          <Route exact path="/" component={Home}/>
          <Route exact path="/matches" component={Matches}/>
          <Route exact path="/matches/:id" component={MatchView}/>
          <Route exact path="/countries/:name" component={Country}/>
          </React.Fragment>
        </Router>
      </div>
    )
  }


}

export default Main
