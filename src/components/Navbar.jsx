import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar (props) {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar__links"><Link to="/volunteer">My Metro</Link></li>
        <li className="navbar__links"><Link to="/help">I Need Help</Link></li>
        <li className="navbar__links"><Link to="/goodsamaritan">Help Others</Link></li>
        <li className="navbar__links">Contact &amp; Locations</li>
        <li className="navbar__links">813.209.1000</li>
      </ul>
    </nav>
  )
}

export default Navbar;