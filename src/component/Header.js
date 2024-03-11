// // Header.js
// import React from 'react';
// import "./header.css"

// const Header = () => {
//   return (
//     <header className="header">
//       <div className="header-left">
//         <input type="text" placeholder="Search" />
//       </div>
//       <div className="header-right">
//         <span>Notifications</span>
//         <span>Profile</span>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.js
import React from 'react';
import { FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <input type="text" placeholder="Search" />
        <button className="search-button">Search</button>
      </div>
      <div className="header-right">
        <FaBell className="icon" />
        <FaEnvelope className="icon" />
        <FaUser className="icon" />
        <span>Dummy Name</span>
      </div>
    </header>
  );
};

export default Header;
