import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Nav.css';

const NavBar = () => (
  <nav>
    <ul class="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/countries">Country</Link>
        <ul>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
          <li><Link to="/countries/arg">Argentina</Link></li>
        </ul>
        <ul>
          <li><Link to="/countries/arg">Argentina</Link></li>
        </ul>
    </li>
    <li><Link to="/matches">Matches</Link></li>
  </ul>
</nav>
)

export default NavBar;
