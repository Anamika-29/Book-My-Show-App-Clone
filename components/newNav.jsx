import React from 'react';
import './nav2.css';

const NavbarNew = () => {
  return (
    <nav className="navbar">
      <div className="left-content">
        <ul>
          <li>Movies</li>
          <li>Stream</li>
          <li>Events</li>
          <li>Plays</li>
          <li>Sport</li>
          <li>Activities</li>
          <li>Buzz</li>
        </ul>
      </div>
      <div className="right-content">
        <ul>
          <li>LiveStreamShow</li>
          <li>Corporates</li>
          <li>Offers</li>
          <li style={{paddingRight:"150px"}}>Gift Cards</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarNew;
