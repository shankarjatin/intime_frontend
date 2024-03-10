

import React, { useState } from 'react';
import axios from 'axios';
import LeftForm from './components/LeftForm';
import RightForm from './components/RightForm';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { IconName } from "react-icons/fa";
import "./App.css"

const App = () => {
  const [planId, setPlanId] = useState(null);
  const [showRightForm, setShowRightForm] = useState(false);
  const [planName, setPlanName] = useState('');

  const handleLeftFormSubmit = (planId) => {
    setPlanId(planId);
    setShowRightForm(true);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Header />
        <div className="display">
          <p>Name of the plane</p>
        <input 
                type="text" 
                placeholder="Enter Plan Name" 
                value={planName} 
                onChange={(e) => setPlanName(e.target.value)} 
              />
          <div className='formContainer'>
            <div className='form-box'>
            
              <LeftForm onFormSubmit={handleLeftFormSubmit} planName={planName} />
              {/* <LeftForm onFormSubmit={handleLeftFormSubmit} /> */}
            </div>
            {showRightForm && (
              <div className='form-box'>
                <RightForm planId={planId} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
