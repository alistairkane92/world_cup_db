import React, { Component } from 'react';
import Matches from "./containers/Matches";
import Home from "./containers/Home";
import CountrySelect from "./components/CountrySelect";
import Country from "./components/Country";

import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home}/>
          <Route exact path="/matches" component={Matches}/>
          <Route exact path="/countries" component={CountrySelect}/>
          <Route exact path="/countries/:name" component={Country}/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
