

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import LeftForm from './component/LeftForm';
// // import RightForm from './component/RightForm';
// // import Header from './component/Header';
// // import Sidebar from './component/Sidebar';
// // import Warranty from './component/Warranty'; // Import the new component
// // import { Link } from 'react-router-dom';

// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faHome } from '@fortawesome/free-solid-svg-icons';
// // import { IconName } from "react-icons/fa";
// // import "./App.css"

// // const App = () => {
// //   const [planId, setPlanId] = useState(null);
// //   const [showRightForm, setShowRightForm] = useState(false);
// //   const [planName, setPlanName] = useState('');
// //   const [showNewComponent, setShowNewComponent] = useState(false); // State to manage new component visibility

// //   const handleLeftFormSubmit = (planId) => {
// //     setPlanId(planId);
// //     setShowRightForm(true);
// //   };

// //   const handleLoadNewComponent = () => {
// //     setShowNewComponent(true);
// //   };

// //   return (
// //     <div className="container">
// //       <div className="sidebar">
// //         <Sidebar />
// //       </div>
// //       <div className="main-content">
// //         <Header />
// //         <div className='container plan'><h4>Create plan</h4></div>
// //         <div className="display">
// //           <div className="container name">
// //             <p className="planName">Name of the plane</p>
// //             <input
// //               className="planInput"
// //               type="text"
// //               placeholder="Enter Plan Name"
// //               value={planName}
// //               onChange={(e) => setPlanName(e.target.value)}
// //             />
// //           </div>
// //           <div className='formContainer'>
// //             <div className='form-box'>
// //               <LeftForm onFormSubmit={handleLeftFormSubmit} planName={planName} />
// //             </div>
// //             {showRightForm && (
// //               <div className='form-box'>
// //                 <RightForm planId={planId} />
// //               </div>
// //             )}
// //           </div>
// //           {/* Button to load new component */}
// //           <button onClick={handleLoadNewComponent}>Load New Component</button>
// //           {/* Conditionally render new component */}
// //           {showNewComponent && <Warranty />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default App;


// import React, { useState } from 'react';
// import axios from 'axios';
// import LeftForm from './component/LeftForm';
// import RightForm from './component/RightForm';
// import Header from './component/Header';
// import Sidebar from './component/Sidebar';
// import Warranty from './component/Warranty'; // Import the new component
// import { Link } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
// import { IconName } from "react-icons/fa";
// import "./App.css"

// const App = () => {
//   const [planId, setPlanId] = useState(null);
//   const [showRightForm, setShowRightForm] = useState(false);
//   const [planName, setPlanName] = useState('');
//   const [showNewComponent, setShowNewComponent] = useState(false); // State to manage new component visibility

//   const handleLeftFormSubmit = (planId) => {
//     setPlanId(planId);
//     setShowRightForm(true);
//   };

//   const handleLoadNewComponent = () => {
//     setShowNewComponent(true);
//   };

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <Sidebar />
//       </div>
//       <div className="main-content">
//         <Header />
//         <div className='container plan'><h4>Create plan</h4></div>
//         <div className="display">
//           <div className="container name">
//             <p className="planName">Name of the plane</p>
//             <input
//               className="planInput"
//               type="text"
//               placeholder="Enter Plan Name"
//               value={planName}
//               onChange={(e) => setPlanName(e.target.value)}
//             />
//           </div>
//           {!showNewComponent && (
//             <div className='formContainer'>
//               <div className='form-box'>
//                 <LeftForm onFormSubmit={handleLeftFormSubmit} planName={planName} />
//               </div>
//               {showRightForm && (
//                 <div className='form-box'>
//                   <RightForm planId={planId} />
//                 </div>
//               )}
//             </div>
//           )}
//           {/* Button to load new component */}
//           <button onClick={handleLoadNewComponent}>Load New Component</button>
//           {/* Conditionally render new component */}
//           {showNewComponent && <Warranty />}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import LeftForm from './component/LeftForm';
import RightForm from './component/RightForm';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Warranty from './component/Warranty'; // Import the new component
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { IconName } from "react-icons/fa";
import "./App.css"

const App = () => {
  const [planId, setPlanId] = useState(null);
  const [showRightForm, setShowRightForm] = useState(false);
  const [planName, setPlanName] = useState('');
  const [showNewComponent, setShowNewComponent] = useState(false); // State to manage new component visibility

  const handleLeftFormSubmit = (planId) => {
    setPlanId(planId);
    setShowRightForm(true);
  };

  const handleLoadNewComponent = () => {
    setShowNewComponent(true);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Header />
        <div className='container plan'><h4>Warranty</h4></div>
        <div className="display">
          <div className="container name">
            <p className="planName">Name of the plan</p>
            <input
              className="planInput"
              type="text"
              placeholder="Enter Plan Name"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
            />
          </div>
          {!showNewComponent && (
            <div className='formContainer'>
              <div className='form-box'>
                <LeftForm onFormSubmit={handleLeftFormSubmit} planName={planName} />
              </div>
              {showRightForm && (
                <div className='form-box'>
                  <RightForm planId={planId} />
                </div>
              )}
            </div>
          )}
          {/* Button to load new component */}
          {!showNewComponent && <button onClick={handleLoadNewComponent}>Load New Component</button>}
          {/* Conditionally render new component */}
          {showNewComponent && <Warranty />}
        </div>
      </div>
    </div>
  );
};
export default App;
