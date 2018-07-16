import React from 'react'
import './styles/Nav.css';

const NavBar = () => {
  return(
    <nav>
      <ul id="nav">
        <li><a href="/">Home</a></li>
        <li id="country-menu-li">Country
          <div id="country-submenu-container">
            <ul>
              <li><a href="/countries/arg">Argentina</a></li>
              <li><a href="/countries/aus">Australia</a></li>
              <li><a href="/countries/bel">Belgium</a></li>
              <li><a href="/countries/bra">Brazil</a></li>
              <li><a href="/countries/col">Columbia</a></li>
              <li><a href="/countries/crc">Costa Rica</a></li>
              <li><a href="/countries/cro">Croatia</a></li>
              <li><a href="/countries/den">Denmark</a></li>
              <li><a href="/countries/egy">Egypt</a></li>
              <li><a href="/countries/eng">England</a></li>
              <li><a href="/countries/fra">France</a></li>
              <li><a href="/countries/ger">Germany</a></li>
              <li><a href="/countries/isl">Iceland</a></li>
              <li><a href="/countries/irn">Iran</a></li>
              <li><a href="/countries/jpn">Japan</a></li>
              <li><a href="/countries/kor">Korea Republic</a></li>
            </ul>
            <ul>
              <li><a href="/countries/mex">Mexico</a></li>
              <li><a href="/countries/mar">Morocco</a></li>
              <li><a href="/countries/nga">Nigeria</a></li>
              <li><a href="/countries/pan">Panama</a></li>
              <li><a href="/countries/per">Peru</a></li>
              <li><a href="/countries/pol">Poland</a></li>
              <li><a href="/countries/por">Portugal</a></li>
              <li><a href="/countries/rus">Russia</a></li>
              <li><a href="/countries/ksa">Saudi Arabia</a></li>
              <li><a href="/countries/sen">Senegal</a></li>
              <li><a href="/countries/srb">Serbia</a></li>
              <li><a href="/countries/esp">Spain</a></li>
              <li><a href="/countries/swe">Sweden</a></li>
              <li><a href="/countries/sui">Switzerland</a></li>
              <li><a href="/countries/tun">Tunisia</a></li>
              <li><a href="/countries/uru">Uruguay</a></li>
            </ul>
          </div>
        </li>
        <li><a href="/matches">Matches</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
