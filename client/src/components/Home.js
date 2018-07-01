import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>World Cup 2018 Stats</h1>
      <h2>Here you can find stats from the 2018 World Cup, hosted in Russia</h2>
      <p>Find Data By:</p>
      <ul>
        <li>
          <Link to="/matches">All Matches</Link>
        </li>
        <li>
          <Link to="/countries">Select by Country</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
