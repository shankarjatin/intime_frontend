// Header.js
import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <input type="text" placeholder="Search" />
      </div>
      <div className="header-right">
        <span>Notifications</span>
        <span>Profile</span>
      </div>
    </header>
  );
};

export default Header;
