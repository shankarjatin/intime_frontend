


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function LeftForm({ loadRightHandSideForm }) {
// //   const [planDetails, setPlanDetails] = useState('');
// //   const [tenure, setTenure] = useState('Monthly');
// //   const [planMetricType, setPlanMetricType] = useState('');
// //   const [planMetricValue, setPlanMetricValue] = useState('');
// //   const [deductibleMetricType, setDeductibleMetricType] = useState('');
// //   const [deductibleMetricValue, setDeductibleMetricValue] = useState('');
// //   const [deductibles, setDeductibles] = useState([{ name: '', type: '', value: '' }]);

// //   const handlePlanMetricTypeChange = (e) => {
// //     setPlanMetricType(e.target.value);
// //   };

// //   const handlePlanMetricValueChange = (e) => {
// //     setPlanMetricValue(e.target.value);
// //   };

// //   const handleDeductibleMetricTypeChange = (e) => {
// //     setDeductibleMetricType(e.target.value);
// //   };

// //   const handleDeductibleMetricValueChange = (e) => {
// //     setDeductibleMetricValue(e.target.value);
// //   };

// //   const handleDeductibleChange = (index, key, value) => {
// //     const newDeductibles = [...deductibles];
// //     newDeductibles[index][key] = value;
// //     setDeductibles(newDeductibles);
// //   };

// //   const addDeductible = () => {
// //     setDeductibles([...deductibles, { name: '', type: '', value: '' }]);
// //   };

// //   const handleSubmit = () => {
// //     // Only one field of data will be posted
// //     const dataToPost = {
// //       planDetails,
// //       tenure,
// //       planMetricType,
// //       planMetricValue,
// //       deductibleMetricType,
// //       deductibleMetricValue,
// //       deductibles: deductibles.map(deductible => ({ name: deductible.name, type: deductible.type, value: deductible.value }))
// //     };

// //     console.log(dataToPost);

// //     // Post the form data to the API
// //     axios.fetch('http://localhost:8000/api/plans', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(dataToPost),
// //     })
// //       .then(response => response.json())
// //       .then(data => {
// //         console.log('Form data posted successfully:', data);
// //         // Load right-hand side form after successful form submission
// //         loadRightHandSideForm(data.planId);
// //       })
// //       .catch(error => {
// //         console.error('Error posting form data:', error);
// //       });
// //   };

// //   return (
// //     <div>
// //       <h2>Plan Creation</h2>
// //       <label>
// //         Plan Details:
// //         <input type="text" value={planDetails} onChange={(e) => setPlanDetails(e.target.value)} />
// //       </label>
// //       <label>
// //         Select Tenure:
// //         <select value={tenure} onChange={(e) => setTenure(e.target.value)}>
// //           <option value="Monthly">Monthly</option>
// //           <option value="Yearly">Yearly</option>
// //         </select>
// //       </label>
// //       <div>
// //         <label>
// //           Plan Metric Type:
// //           <select value={planMetricType} onChange={handlePlanMetricTypeChange}>
// //             <option value="">Select Type</option>
// //             <option value="Percentage">Percentage</option>
// //             <option value="Fixed">Fixed</option>
// //           </select>
// //         </label>
// //         {planMetricType && (
// //           <label>
// //             Plan Metric Value:
// //             <input type="text" value={planMetricValue} onChange={handlePlanMetricValueChange} />
// //           </label>
// //         )}
// //       </div>
// //       <h2>Deductible Creation</h2>
// //       {/* <div>
// //         <label>
// //           Deductible Metric Type:
// //           <select value={deductibleMetricType} onChange={handleDeductibleMetricTypeChange}>
// //             <option value="">Select Type</option>
// //             <option value="Percentage">Percentage</option>
// //             <option value="Fixed">Fixed</option>
// //           </select>
// //         </label>
// //         {deductibleMetricType && (
// //           <label>
// //             Deductible Metric Value:
// //             <input type="text" value={deductibleMetricValue} onChange={handleDeductibleMetricValueChange} />
// //           </label>
// //         )}
// //       </div> */}
// //       <h3>Deductibles</h3>
// //       {deductibles.map((deductible, index) => (
// //         <div key={index}>
// //           <input
// //             type="text"
// //             placeholder="Deductible Name"
// //             value={deductible.name}
// //             onChange={(e) => handleDeductibleChange(index, 'name', e.target.value)}
// //           />
// //           <select value={deductible.type} onChange={(e) => handleDeductibleChange(index, 'type', e.target.value)}>
// //             <option value="">Select Type</option>
// //             <option value="Percentage">Percentage</option>
// //             <option value="Fixed">Fixed</option>
// //           </select>
// //           <input
// //             type="number"
// //             placeholder="Deductible Value"
// //             value={deductible.value}
// //             onChange={(e) => handleDeductibleChange(index, 'value', e.target.value)}
// //           />
// //         </div>
// //       ))}
// //       <button onClick={addDeductible}>Add More Deductible</button>
// //       <button onClick={handleSubmit}>Save</button>
// //     </div>
// //   );
// // }

// // export default LeftForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// function LeftForm({ loadRightHandSideForm }) {
//   const [planDetails, setPlanDetails] = useState('');
//   const [tenure, setTenure] = useState('Monthly');
//   const [planMetricType, setPlanMetricType] = useState('');
//   const [planMetricValue, setPlanMetricValue] = useState('');
//   const [deductibleMetricType, setDeductibleMetricType] = useState('');
//   const [deductibleMetricValue, setDeductibleMetricValue] = useState('');
//   const [deductibles, setDeductibles] = useState([{ name: '', type: '', value: '' }]);

//   const handlePlanMetricTypeChange = (e) => {
//     setPlanMetricType(e.target.value);
//     // Set default Deductible Metric Type based on Plan Metric Type
//     if (e.target.value === 'Fixed') {
//       setDeductibleMetricType('Fixed');
//     } else if (e.target.value === 'Percentage') {
//       setDeductibleMetricType('Percentage');
//     }
//   };

//   const handlePlanMetricValueChange = (e) => {
//     setPlanMetricValue(e.target.value);
//   };

//   const handleDeductibleMetricTypeChange = (e) => {
//     setDeductibleMetricType(e.target.value);
//   };

//   const handleDeductibleMetricValueChange = (e) => {
//     setDeductibleMetricValue(e.target.value);
//   };

//   const handleDeductibleChange = (index, key, value) => {
//     const newDeductibles = [...deductibles];
//     newDeductibles[index][key] = value;
//     setDeductibles(newDeductibles);
//   };

//   const addDeductible = () => {
//     setDeductibles([...deductibles, { name: '', type: '', value: '' }]);
//   };

//   const handleSubmit = () => {
//     // Only one field of data will be posted
//     const dataToPost = {
//       planDetails,
//       tenure,
//       planMetricType,
//       planMetricValue,
//       deductibleMetricType,
//       deductibleMetricValue,
//       deductibles: deductibles.map(deductible => ({ name: deductible.name, type: deductible.type, value: deductible.value }))
//     };

//     console.log(dataToPost);

//     // Post the form data to the API
//     axios.post('http://localhost:8000/api/plans', dataToPost)
//       .then(response => {
//         console.log('Form data posted successfully:', response.data);
//         // Load right-hand side form after successful form submission
//         loadRightHandSideForm(response.data.planId);
//       })
//       .catch(error => {
//         console.error('Error posting form data:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Plan Creation</h2>
//       <label>
//         Plan Details:
//         <input type="text" value={planDetails} onChange={(e) => setPlanDetails(e.target.value)} />
//       </label>
//       <label>
//         Select Tenure:
//         <select value={tenure} onChange={(e) => setTenure(e.target.value)}>
//           <option value="Monthly">Monthly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//       </label>
//       <div>
//         <label>
//           Plan Metric Type:
//           <select value={planMetricType} onChange={handlePlanMetricTypeChange}>
//             <option value="">Select Type</option>
//             <option value="Percentage">Percentage</option>
//             <option value="Fixed">Fixed</option>
//           </select>
//         </label>
//         {planMetricType && (
//           <label>
//             Plan Metric Value:
//             <input type="text" value={planMetricValue} onChange={handlePlanMetricValueChange} />
//           </label>
//         )}
//       </div>
//       <h2>Deductible Creation</h2>
//       <h3>Deductibles</h3>
//       {deductibles.map((deductible, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Deductible Name"
//             value={deductible.name}
//             onChange={(e) => handleDeductibleChange(index, 'name', e.target.value)}
//           />
//           <select value={deductible.type} onChange={(e) => handleDeductibleChange(index, 'type', e.target.value)}>
//             <option value="">Select Type</option>
//             <option value="Percentage">Percentage</option>
//             <option value="Fixed">Fixed</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Deductible Value"
//             value={deductible.value}
//             onChange={(e) => handleDeductibleChange(index, 'value', e.target.value)}
//           />
//         </div>
//       ))}
//       <button onClick={addDeductible}>Add More Deductible</button>
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// }

// export default LeftForm;




// import React, { useState } from 'react';
// import axios from 'axios';

// function LeftForm({ loadRightHandSideForm }) {
//   const [planDetails, setPlanDetails] = useState('');
//   const [tenure, setTenure] = useState('Monthly');
//   const [planMetricType, setPlanMetricType] = useState('');
//   const [planMetricValue, setPlanMetricValue] = useState('');
//   const [deductibles, setDeductibles] = useState([{ name: '', type: '', value: '' }]);

//   const handlePlanMetricTypeChange = (e) => {
//     const selectedPlanMetricType = e.target.value;
//     setPlanMetricType(selectedPlanMetricType);
//     // Set default Deductible Metric Type based on Plan Metric Type
//     if (selectedPlanMetricType === 'Fixed') {
//       setDeductibles(prevDeductibles => prevDeductibles.map(deductible => ({ ...deductible, type: 'Fixed' })));
//     } else if (selectedPlanMetricType === 'Percentage') {
//       setDeductibles(prevDeductibles => prevDeductibles.map(deductible => ({ ...deductible, type: 'Percentage' })));
//     }
//   };

//   const handlePlanMetricValueChange = (e) => {
//     setPlanMetricValue(e.target.value);
//   };

//   const handleDeductibleChange = (index, key, value) => {
//     const newDeductibles = [...deductibles];
//     newDeductibles[index][key] = value;
//     setDeductibles(newDeductibles);
//   };

//   const addDeductible = () => {
//     setDeductibles([...deductibles, { name: '', type: '', value: '' }]);
//   };

//   const handleSubmit = () => {
//     // Only one field of data will be posted
//     const dataToPost = {
//       planDetails,
//       tenure,
//       planMetricType,
//       planMetricValue,
//       deductibles
//     };

//     console.log(dataToPost);

//     // Post the form data to the API
//     axios.post('http://localhost:8000/api/plans', dataToPost)
//       .then(response => {
//         console.log('Form data posted successfully:', response.data);
//         // Load right-hand side form after successful form submission
//         loadRightHandSideForm(response.data.planId);
//       })
//       .catch(error => {
//         console.error('Error posting form data:', error);
//       });
//   };

//   return (
//     <div>
//       <h2>Plan Creation</h2>
//       <label>
//         Plan Details:
//         <input type="text" value={planDetails} onChange={(e) => setPlanDetails(e.target.value)} />
//       </label>
//       <label>
//         Select Tenure:
//         <select value={tenure} onChange={(e) => setTenure(e.target.value)}>
//           <option value="Monthly">Monthly</option>
//           <option value="Yearly">Yearly</option>
//         </select>
//       </label>
//       <div>
//         <label>
//           Plan Metric Type:
//           <select value={planMetricType} onChange={handlePlanMetricTypeChange}>
//             <option value="">Select Type</option>
//             <option value="Percentage">Percentage</option>
//             <option value="Fixed">Fixed</option>
//           </select>
//         </label>
//         {planMetricType && (
//           <label>
//             Plan Metric Value:
//             <input type="text" value={planMetricValue} onChange={handlePlanMetricValueChange} />
//           </label>
//         )}
//       </div>
//       <h2>Deductible Creation</h2>
//       <h3>Deductibles</h3>
//       {deductibles.map((deductible, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Deductible Name"
//             value={deductible.name}
//             onChange={(e) => handleDeductibleChange(index, 'name', e.target.value)}
//           />
//           <select value={deductible.type} onChange={(e) => handleDeductibleChange(index, 'type', e.target.value)}>
//             <option value="">Select Type</option>
//             <option value="Percentage">Percentage</option>
//             <option value="Fixed">Fixed</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Deductible Value"
//             value={deductible.value}
//             onChange={(e) => handleDeductibleChange(index, 'value', e.target.value)}
//           />
//         </div>
//       ))}
//       <button onClick={addDeductible}>Add More Deductible</button>
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// }

// export default LeftForm;




import React, { useState } from 'react';
import axios from 'axios';
import "./leftForm.css"

const LeftForm = ({ onFormSubmit ,planName }) => {
  const [planDetails, setPlanDetails] = useState('');
  const [tenure, setTenure] = useState('Monthly');
  const [planMetricType, setPlanMetricType] = useState('');
  const [planMetricValue, setPlanMetricValue] = useState('');
  const [deductibles, setDeductibles] = useState([{ name: '', type: '', value: '' }]);

  const handlePlanMetricTypeChange = (e) => {
    const selectedPlanMetricType = e.target.value;
    setPlanMetricType(selectedPlanMetricType);
    // Set default Deductible Metric Type based on Plan Metric Type
    if (selectedPlanMetricType === 'Fixed') {
      setDeductibles(prevDeductibles => prevDeductibles.map(deductible => ({ ...deductible, type: 'Fixed' })));
    } else if (selectedPlanMetricType === 'Percentage') {
      setDeductibles(prevDeductibles => prevDeductibles.map(deductible => ({ ...deductible, type: 'Percentage' })));
    }
  };

  const handlePlanMetricValueChange = (e) => {
    setPlanMetricValue(e.target.value);
  };

  const handleDeductibleChange = (index, key, value) => {
    const newDeductibles = [...deductibles];
    newDeductibles[index][key] = value;
    setDeductibles(newDeductibles);
  };

  const addDeductible = () => {
    setDeductibles([...deductibles, { name: '', type: '', value: '' }]);
  };

  const handleSubmit = () => {
    // Only one field of data will be posted
    const dataToPost = {
      planDetails,
      tenure,
      planMetricType,
      planMetricValue,
      deductibles
    };

    // Post the form data to the API
    axios.post('http://localhost:8000/api/plans', dataToPost)
      .then(response => {
        console.log('Form data posted successfully:', response.data);
        // Load right-hand side form after successful form submission
        onFormSubmit(response.data.planId); // Pass the planId to the parent component
      })
      .catch(error => {
        console.error('Error posting form data:', error);
      });
  };

  return (
//     <div className='left'>
        
//       <p>Create Plan: {planName}</p>
//       {/* <label >
//         <input type="text" value={planDetails} onChange={(e) => setPlanDetails(e.target.value)} />
//       </label> */}
//     <div>
//     <label >
//   Select Tenure to display:

//   <div style={{ display: 'flex', marginLeft: '10px' }}>
//     <input
//       type="radio"
//       id="monthly"
//       name="tenure"
//       value="Monthly"
//       checked={tenure === "Monthly"}
//       onChange={(e) => setTenure(e.target.value)}
//     />
//     <label htmlFor="monthly">Monthly</label>

//     <input
//       type="radio"
//       id="yearly"
//       name="tenure"
//       value="Yearly"
//       checked={tenure === "Yearly"}
//       onChange={(e) => setTenure(e.target.value)}
//       style={{ marginLeft: '10px' }}
//     />
//     <label htmlFor="yearly">Yearly</label>
//   </div>
// </label>

      
// <div style={{ display: 'flex', marginLeft: '10px' }}>
//   <label style={{ marginRight: '10px' }}>
//     Plan Metric Type:
//     <select value={planMetricType} onChange={handlePlanMetricTypeChange}>
//       <option value="">Select Type</option>
//       <option value="Percentage">Percentage</option>
//       <option value="Fixed">Fixed</option>
//     </select>
//   </label>
//   <div>
//     {planMetricType && (
//       <label style={{ display: 'block', marginBottom: '5px' }}>
//         Plan Metric Value:
//         <input type="text" value={planMetricValue} onChange={handlePlanMetricValueChange} />
//       </label>
//     )}
//   </div>
// </div>


    
     
//       {deductibles.map((deductible, index) => (
//         <div>
//              <h5> Create Deductibles</h5>
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Enter Deductible Name"
//             value={deductible.name}
//             onChange={(e) => handleDeductibleChange(index, 'name', e.target.value)}
//           />
//           </div>
//           <div >
//           <h5> Deductible metric</h5>
//           <select value={deductible.type} onChange={(e) => handleDeductibleChange(index, 'type', e.target.value)}>
//             <option value="">Select Type</option>
//             <option value="Percentage">Percentage</option>
//             <option value="Fixed">Fixed</option>
//           </select>
//           <input
//             type="number"
//             placeholder="Deductible Value"
//             value={deductible.value}
//             onChange={(e) => handleDeductibleChange(index, 'value', e.target.value)}
//           />
//           </div>
//         </div>
//       ))}
//       <br></br>
//        <button onClick={handleSubmit}>Save</button>
//       <button onClick={addDeductible}>Add More Deductible</button>
//       </div>
//     </div>
<div className='left'>
      <p>Create Plan: {planName}</p>
      <label>
        Select Tenure to display:
        <div style={{ display: 'flex', marginLeft: '10px' }}>
          <input
            type="radio"
            id="monthly"
            name="tenure"
            value="Monthly"
            checked={tenure === "Monthly"}
            onChange={(e) => setTenure(e.target.value)}
          />
          <label htmlFor="monthly">Monthly</label>

          <input
            type="radio"
            id="yearly"
            name="tenure"
            value="Yearly"
            checked={tenure === "Yearly"}
            onChange={(e) => setTenure(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
          <label htmlFor="yearly">Yearly</label>
        </div>
      </label>

      <div style={{ display: 'flex', marginLeft: '10px' }}>
        <label style={{ marginRight: '10px' }}>
          Plan Metric Type:
          <select value={planMetricType} onChange={handlePlanMetricTypeChange}>
            <option value="">Select Type</option>
            <option value="Percentage">Percentage</option>
            <option value="Fixed">Fixed</option>
          </select>
        </label>
        <div>
          {planMetricType && (
            <label style={{ display: 'block', marginBottom: '5px' }}>
              Plan Metric Value:
              <input type="text" value={planMetricValue} onChange={handlePlanMetricValueChange} />
            </label>
          )}
        </div>
      </div>

      <div className="deductibles">
        {deductibles.map((deductible, index) => (
          <div key={index}>
            <h5> Create Deductibles</h5>
            <input
              type="text"
              placeholder="Enter Deductible Name"
              value={deductible.name}
              onChange={(e) => handleDeductibleChange(index, 'name', e.target.value)}
            />
            <div>
              <h5> Deductible metric</h5>
              <select value={deductible.type} onChange={(e) => handleDeductibleChange(index, 'type', e.target.value)}>
                <option value="">Select Type</option>
                <option value="Percentage">Percentage</option>
                <option value="Fixed">Fixed</option>
              </select>
              <input
                type="number"
                placeholder="Deductible Value"
                value={deductible.value}
                onChange={(e) => handleDeductibleChange(index, 'value', e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Save</button>
      <div className="add-deductible" onClick={addDeductible}>Add More Deductible</div>
    </div>
  );

}

export default LeftForm;
