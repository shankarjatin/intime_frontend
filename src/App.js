
// // // import {
// // //   createBrowserRouter,
// // //   RouterProvider,
// // // } from "react-router-dom";
// // // import './App.css';
// // // import { useEffect } from 'react';
// // // import axios from 'axios';

// // // function App() {
// // //   const [planDetails, setPlanDetails] = useState('');
// // //   const [tenure, setTenure] = useState('');
// // //   const [planMetric, setPlanMetric] = useState('');
// // //   const [deductibles, setDeductibles] = useState([{ name: '', value: '' }]);
// // //   const [showRightForm, setShowRightForm] = useState(false);
// // //   const [rightFormData, setRightFormData] = useState({
// // //     planId: '',
// // //     type: '',
// // //     brand: '',
// // //     series: '',
// // //     model: '',
// // //     minAmount: '',
// // //     maxAmount: ''
// // //   });
// // //   const [planIdOptions, setPlanIdOptions] = useState([]);
// // //   const [selectedPlanId, setSelectedPlanId] = useState('');



// // //   useEffect(() => {
// // //     // Fetch options for plan IDs
// // //     const fetchPlanIds = async () => {
// // //       try {
// // //         const response = await axios.fetch('http://intime-backend.onrender.com/api/plans');
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch plan IDs');
// // //         }
// // //         const data = await response.json();
// // //         setPlanIdOptions(data.map(plan => ({ id: plan._id, label: plan.name }))); // Assuming your plan object has an _id field
// // //       } catch (error) {
// // //         console.error('Error fetching plan IDs:', error);
// // //       }
// // //     };

// // //     fetchPlanIds();
// // //   }, []);

// // //   // const handlePlanSubmit = async (e) => {
// // //   //   e.preventDefault();
// // //   //   const savedPlanId = await savePlanToDatabase(); 

// // //   //   if (savedPlanId) {
// // //   //     setRightFormData({ ...rightFormData, planId: savedPlanId });
// // //   //     setShowRightForm(true);
// // //   //   }
// // //   // };

// // //   const handlePlanSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       // Send a POST request to create the plan
// // //       const response = await axios.fetch('http://intime-backend.onrender.com/api/plans', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json'
// // //         },
// // //         body: JSON.stringify({
// // //           planDetails: planDetails,
// // //           tenure: tenure,
// // //           planMetric: planMetric,
// // //           deductibles: deductibles
// // //         })
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error('Failed to save plan');
// // //       }

// // //       // Extract the planId from the response
// // //       const data = await response.json();
// // //       const savedPlanId = data._id;

// // //       // Update state with the planId and show the right form
// // //       setSelectedPlanId(savedPlanId);
// // //       setShowRightForm(true);
// // //     } catch (error) {
// // //       console.error('Error saving plan:', error);
// // //     }
// // //   };

// // //   const savePlanToDatabase = async () => {
// // //     const response = await axios.fetch('http://intime-backend.onrender.com/api/plans', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json'
// // //       },
// // //       body: JSON.stringify({
// // //         planDetails: planDetails,
// // //         tenure: tenure,
// // //         planMetric: planMetric,
// // //         deductibles: deductibles
// // //       })
// // //     });

// // //     const data = await response.json();
// // //     return data._id;
// // //   };

// // //   const handleRightFormSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const response = await axios.fetch('http://intime-backend.onrender.com/api/rightHandForm', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json'
// // //       },
// // //       body: JSON.stringify(rightFormData)
// // //     });

// // //     const data = await response.json();
// // //     console.log('Right-hand side form submitted:', data);
// // //   };

// // //   const handleAddDeductible = () => {
// // //     setDeductibles([...deductibles, { name: '', value: '' }]);
// // //   };

// // //   const handleDeductibleChange = (index, event) => {
// // //     const updatedDeductibles = [...deductibles];
// // //     updatedDeductibles[index][event.target.name] = event.target.value;
// // //     setDeductibles(updatedDeductibles);
// // //   };

// // //   const handleRightFormChange = (event) => {
// // //     setRightFormData({ ...rightFormData, [event.target.name]: event.target.value });
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <div className="left-form">
// // //         <h2>Plan Creation</h2>
// // //         <form onSubmit={handlePlanSubmit}>
       
// // //           <label htmlFor="planDetails">Plan Details:</label><br />
// // //           <input type="text" id="planDetails" name="planDetails" value={planDetails} onChange={(e) => setPlanDetails(e.target.value)} /><br />

// // //           <label htmlFor="tenure">Tenure:</label><br />
// // //           <select id="tenure" name="tenure" value={tenure} onChange={(e) => setTenure(e.target.value)}>
// // //             <option value="">Select Tenure</option>
// // //             <option value="Monthly">Monthly</option>
// // //             <option value="Yearly">Yearly</option>
// // //           </select><br />

// // //           <label htmlFor="planMetric">Plan Metric:</label><br />
// // //           <select id="planMetric" name="planMetric" value={planMetric} onChange={(e) => setPlanMetric(e.target.value)}>
// // //             <option value="">Select Plan Metric</option>
// // //             <option value="Percentage">Percentage</option>
// // //             <option value="Fixed">Fixed</option>
// // //           </select><br />

// // //           <div>
// // //             {deductibles.map((deductible, index) => (
// // //               <div key={index}>
// // //                 <input type="text" name="name" placeholder="Deductible Name" value={deductible.name} onChange={(e) => handleDeductibleChange(index, e)} />
// // //                 <input type="number" name="value" placeholder="Deductible Value" value={deductible.value} onChange={(e) => handleDeductibleChange(index, e)} />
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <button type="button" onClick={handleAddDeductible}>Add Deductible</button>


// // //           <button type="submit">Save Plan</button>
// // //         </form>
// // //       </div>

// // //       {showRightForm && (
// // //         <div className="right-form">
// // //           <h2>Right-hand Side Prototype Form</h2>
// // //           <form onSubmit={handleRightFormSubmit}>
// // //             <select name="planId" value={rightFormData.planId} onChange={handleRightFormChange}>
// // //               <option value="">Select Plan</option>
// // //               {/* Fetch and map options for plan IDs */}
// // //             </select><br />

// // //             <input type="text" name="type" placeholder="Type" value={rightFormData.type} onChange={handleRightFormChange} /><br />
// // //             <input type="text" name="brand" placeholder="Brand" value={rightFormData.brand} onChange={handleRightFormChange} /><br />
// // //             <input type="text" name="series" placeholder="Series" value={rightFormData.series} onChange={handleRightFormChange} /><br />
// // //             <input type="text" name="model" placeholder="Model" value={rightFormData.model} onChange={handleRightFormChange} /><br />
// // //             <input type="number" name="minAmount" placeholder="Min. Amount" value={rightFormData.minAmount} onChange={handleRightFormChange} /><br />
// // //             <input type="number" name="maxAmount" placeholder="Max. Amount" value={rightFormData.maxAmount} onChange={handleRightFormChange} /><br />

// // //             <button type="submit">Submit Right-hand Side Form</button>
// // //           </form>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default App;



// // // // import React, { useState } from 'react';
// // // // import axios from 'axios';
// // // // import { useEffect } from 'react';



// // // // const PlanCreationForm = () => {
// // // //   const [formData, setFormData] = useState({
// // // //     planDetails: '',
// // // //     tenure: 'Monthly',
// // // //     planMetric: 'Percentage',
// // // //     deductibles: [{ name: '', value: '' }]
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData({
// // // //       ...formData,
// // // //       [name]: value
// // // //     });
// // // //   };

// // // //   const handleDeductibleChange = (index, e) => {
// // // //     const { name, value } = e.target;
// // // //     const newDeductibles = [...formData.deductibles];
// // // //     newDeductibles[index][name] = value;
// // // //     setFormData({
// // // //       ...formData,
// // // //       deductibles: newDeductibles
// // // //     });
// // // //   };

// // // //   const addDeductible = () => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       deductibles: [...formData.deductibles, { name: '', value: '' }]
// // // //     });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       // Call the API to save the form data
// // // //       const response = await axios.post('http://localhost:8000/api/plans', formData);
// // // //       console.log(response.data);

// // // //       // After saving, display the Right-hand Side Prototype Form
// // // //       // You can implement the logic to display it here
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit}>
// // // //       <div>
// // // //         <label htmlFor="planDetails">Plan Details:</label>
// // // //         <input type="text" id="planDetails" name="planDetails" value={formData.planDetails} onChange={handleChange} />
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="tenure">Select Tenure:</label>
// // // //         <select id="tenure" name="tenure" value={formData.tenure} onChange={handleChange}>
// // // //           <option value="Monthly">Monthly</option>
// // // //           <option value="Yearly">Yearly</option>
// // // //         </select>
// // // //       </div>
// // // //       <div>
// // // //         <label>Plan Metric:</label>
// // // //         <label>
// // // //           <input type="radio" name="planMetric" value="Percentage" checked={formData.planMetric === 'Percentage'} onChange={handleChange} />
// // // //           Percentage
// // // //         </label>
// // // //         <label>
// // // //           <input type="radio" name="planMetric" value="Fixed" checked={formData.planMetric === 'Fixed'} onChange={handleChange} />
// // // //           Fixed
// // // //         </label>
// // // //       </div>
// // // //       <div>
// // // //         <h3>Deductible Creation:</h3>
// // // //         {formData.deductibles.map((deductible, index) => (
// // // //           <div key={index}>
// // // //             <input type="text" name="name" placeholder="Deductible Name" value={deductible.name} onChange={(e) => handleDeductibleChange(index, e)} />
// // // //             <input type="number" name="value" placeholder="Deductible Value" value={deductible.value} onChange={(e) => handleDeductibleChange(index, e)} />
// // // //           </div>
// // // //         ))}
// // // //         <button type="button" onClick={addDeductible}>Add Deductible</button>
// // // //       </div>
// // // //       <button type="submit">Save</button>
// // // //     </form>
// // // //   );
// // // // };

// // // // const RightHandSideForm = ({ data }) => {
// // // //   return (
// // // //     <div>
// // // //       <h3>Right-hand Side Prototype Form:</h3>
// // // //       <div>
// // // //         <label htmlFor="selectPlan">Select Plan:</label>
// // // //         <select id="selectPlan" name="selectPlan">
// // // //           {data.map((plan, index) => (
// // // //             <option key={index} value={plan.planId}>{plan.planDetails}</option>
// // // //           ))}
// // // //         </select>
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="chooseType">Choose Type:</label>
// // // //         <input type="text" id="chooseType" name="chooseType" />
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="selectBrand">Select Brand:</label>
// // // //         <input type="text" id="selectBrand" name="selectBrand" />
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="chooseSeries">Choose Series:</label>
// // // //         <input type="text" id="chooseSeries" name="chooseSeries" />
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="selectModel">Select Model:</label>
// // // //         <input type="text" id="selectModel" name="selectModel" />
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="minAmount">Enter Min. Amount:</label>
// // // //         <input type="number" id="minAmount" name="minAmount" />
// // // //       </div>
// // // //       <div>
// // // //         <label htmlFor="maxAmount">Enter Max. Amount:</label>
// // // //         <input type="number" id="maxAmount" name="maxAmount" />
// // // //       </div>
// // // //       <button>Update the entries</button>
// // // //     </div>
// // // //   );
// // // // };

// // // // const App = () => {
// // // //   const [planData, setPlanData] = useState([]);

// // // //   // Fetch plan data from API
// // // //   useEffect(() => {
// // // //     const fetchPlanData = async () => {
// // // //       try {
// // // //         const response = await axios.get('http://localhost:8000/api/plans');
// // // //         setPlanData(response.data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     };

// // // //     fetchPlanData();
// // // //   }, []);

// // // //   return (
// // // //     <div>
// // // //       <h1>Plan Creation</h1>
// // // //       <div style={{ display: 'flex' }}>
// // // //         <div style={{ flex: '1' }}>
// // // //           <PlanCreationForm />
// // // //         </div>
// // // //         <div style={{ flex: '1' }}>
// // // //           <RightHandSideForm data={planData} />
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default App;
// // import React from 'react';
// // import PlanCreation from './components/PlanCreation';

// // function App() {
// //   return (
// //     <div className="App">
// //       <PlanCreation />
// //     </div>
// //   );
// // }

// // export default App;
// // App.js
// import React, { useState } from 'react';
// import LeftForm from './components/LeftForm';
// import RightForm from './components/RightForm';

// const App = () => {
//   const [planId, setPlanId] = useState(null);

//   const handleRightFormSubmit = (planId) => {
//     setPlanId(planId);
//   };

//   return (
//     <div>
//       <h1>Plan Creation App</h1>
//       <div style={{ display: 'flex' }}>
//         <LeftForm onRightFormSubmit={handleRightFormSubmit} />
//         {planId && <RightForm planId={planId} />}
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
// import React, { useState } from 'react';
// import LeftForm from './components/LeftForm';
// import RightForm from './components/RightForm';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import "./App.css"
// const App = () => {
//   const [planId, setPlanId] = useState(null);

//   const loadRightHandSideForm = (planId) => {
//     setPlanId(planId);
//   };

//   return (
//     // <div>
//     //    <Header />
//     //   <div className="content">
//     //     <Navigation />
//     //   <h1>Plan Creation App</h1>
//     //   <div style={{ display: 'flex' }}>
//     //     <LeftForm onRightFormSubmit={handleRightFormSubmit} />
//     //     {planId && <RightForm planId={planId} />}
//     //   </div>
//     //   </div>
//     // </div>
//     <div class="container">
 
   
     
//     <div class="sidebar">
//     <Sidebar />
//         </div>

//       <div className="main-content">
//       <Header />

// <div className="display">
//   <div className='formContainer'>

//     <div className='form-box'>
//         <LeftForm onRightFormSubmit={loadRightHandSideForm} />
//         </div>
//         <div className='form-box'>
//         {planId && <RightForm planId={planId} />}
//         </div>

//         </div>
//         </div>
//       </div>
   
//   </div>
//   );
// };

// export default App;

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
