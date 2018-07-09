import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import './styles/Nav.css';

class NavBar extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <nav>
        <ul id="nav">
          <li><Link to="/">Home</Link></li>
          <li id="country-menu-li">Country
            <div id="country-submenu-container">
              <ul>
                <li><Link to="/countries/arg">Argentina</Link></li>
                <li><Link to="/countries/aus">Australia</Link></li>
                <li><Link to="/countries/bel">Belgium</Link></li>
                <li><Link to="/countries/bra">Brazil</Link></li>
                <li><Link to="/countries/col">Columbia</Link></li>
                <li><Link to="/countries/crc">Costa Rica</Link></li>
                <li><Link to="/countries/cro">Croatia</Link></li>
                <li><Link to="/countries/den">Denmark</Link></li>
                <li><Link to="/countries/egy">Egypt</Link></li>
                <li><Link to="/countries/eng">England</Link></li>
                <li><Link to="/countries/fra">France</Link></li>
                <li><Link to="/countries/ger">Germany</Link></li>
                <li><Link to="/countries/isl">Iceland</Link></li>
                <li><Link to="/countries/irn">Iran</Link></li>
                <li><Link to="/countries/jpn">Japan</Link></li>
                <li><Link to="/countries/kor">Korea Republic</Link></li>
              </ul>
              <ul>
                <li><Link to="/countries/mex">Mexico</Link></li>
                <li><Link to="/countries/mar">Morocco</Link></li>
                <li><Link to="/countries/nga">Nigeria</Link></li>
                <li><Link to="/countries/pan">Panama</Link></li>
                <li><Link to="/countries/per">Peru</Link></li>
                <li><Link to="/countries/pol">Poland</Link></li>
                <li><Link to="/countries/por">Portugal</Link></li>
                <li><Link to="/countries/rus">Russia</Link></li>
                <li><Link to="/countries/ksa">Saudi Arabia</Link></li>
                <li><Link to="/countries/sen">Senegal</Link></li>
                <li><Link to="/countries/srb">Serbia</Link></li>
                <li><Link to="/countries/esp">Spain</Link></li>
                <li><Link to="/countries/swe">Sweden</Link></li>
                <li><Link to="/countries/sui">Switzerland</Link></li>
                <li><Link to="/countries/tun">Tunisia</Link></li>
                <li><Link to="/countries/uru">Uruguay</Link></li>
              </ul>
            </div>
          </li>
          <li><Link to="/matches">Matches</Link></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
