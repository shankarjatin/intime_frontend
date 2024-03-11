
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsersCog, faClipboardList, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./sidebar.css";

const Navigation = () => {
  return (
    <div className="main">
      <div className="logo">
          {/* <img src="logo.png" alt="Company Logo"> */}
      </div>
      <div className="company-name">
        <h2> Company Name</h2> 
      </div>
      <div className="menu">
        <ul>
          <li><a href="#"><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</a></li>
          <li>
            <FontAwesomeIcon icon={faUsersCog} />User Management
            <ul className="submenu">
              <li><a href="#">Users</a></li>
              <li><a href="#">Technicians</a></li>
            </ul>
          </li>
          <li>
            <FontAwesomeIcon icon={faClipboardList} />Orders Management
            <ul className="submenu">
              <li><a href="#">Recent Orders</a></li>
              <li><a href="#">Order Acceptance</a></li>
              <li><a href="#">Technician Allocated</a></li>
              <li><a href="#">Completed Orders</a></li>
            </ul>
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />Notifications
            <ul className="submenu">
              <li><a href="#">Send Notification</a></li>
              <li><a href="#">Schedule Notification</a></li>
            </ul>
          </li>
          <li><FontAwesomeIcon icon={faSignOutAlt} /><a href="#">Log Out</a></li>
        </ul>
      </div>
      <div className="menu"></div>
    </div>
  );
};

export default Navigation;
