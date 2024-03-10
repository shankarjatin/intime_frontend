// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const RightForm = ({ planId }) => {
// // //   const [type, setType] = useState('');
// // //   const [brand, setBrand] = useState('');
// // //   const [series, setSeries] = useState('');
// // //   const [model, setModel] = useState('');
// // //   const [minAmount, setMinAmount] = useState('');
// // //   const [maxAmount, setMaxAmount] = useState('');

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const response = await axios.post('http://localhost:8000/api/rightHandForm', {
// // //         planId,
// // //         type,
// // //         brand,
// // //         series,
// // //         model,
// // //         minAmount,
// // //         maxAmount,
// // //       });
// // //       console.log('Right-hand side form submitted:', response.data);
// // //     } catch (error) {
// // //       console.error('Error submitting right-hand side form:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Right-hand Side Prototype Form</h2>
// // //       <p>Plan ID: {planId}</p>
// // //       <label>
// // //         Choose Type:
// // //         <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
// // //       </label>
// // //       <label>
// // //         Select Brand:
// // //         <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
// // //       </label>
// // //       <label>
// // //         Choose Series:
// // //         <input type="text" value={series} onChange={(e) => setSeries(e.target.value)} />
// // //       </label>
// // //       <label>
// // //         Select Model:
// // //         <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
// // //       </label>
// // //       <label>
// // //         Enter Min. Amount:
// // //         <input type="number" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} />
// // //       </label>
// // //       <label>
// // //         Enter Max. Amount:
// // //         <input type="number" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
// // //       </label>
// // //       <button onClick={handleSubmit}>Submit</button>
// // //     </div>
// // //   );
// // // };

// // // export default RightForm;
// // // RightForm.js
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const RightForm = ({ planId }) => {
// //   const [type, setType] = useState('');
// //   const [brand, setBrand] = useState('');
// //   const [series, setSeries] = useState('');
// //   const [model, setModel] = useState('');
// //   const [minAmount, setMinAmount] = useState('');
// //   const [maxAmount, setMaxAmount] = useState('');

// //   const handleSubmit = async () => {
// //     try {
// //       await axios.post('http://localhost:8000/api/rightHandForm', {
// //         planId,
// //         type,
// //         brand,
// //         series,
// //         model,
// //         minAmount,
// //         maxAmount,
// //       });
// //       console.log('Right-hand side form submitted successfully');
// //     } catch (error) {
// //       console.error('Error submitting right-hand side form:', error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (planId) {
// //       // Fetch right-hand side form data using the planId
// //       const fetchRightFormData = async () => {
// //         try {
// //           const response = await axios.get(`http://localhost:8000/api/rightHandForm/${planId}`);
// //           const data = response.data;
// //           setType(data.type);
// //           setBrand(data.brand);
// //           setSeries(data.series);
// //           setModel(data.model);
// //           setMinAmount(data.minAmount);
// //           setMaxAmount(data.maxAmount);
// //         } catch (error) {
// //           console.error('Error fetching right-hand side form data:', error);
// //         }
// //       };
// //       fetchRightFormData();
// //     }
// //   }, [planId]);

// //   return (
// //     <div>
// //       <h2>Right-hand Side Prototype Form</h2>
// //       <p>1. Select Plan: {planId}</p>
// //       <label>
// //         Choose Type:
// //         <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
// //       </label>
// //       <label>
// //         Select Brand:
// //         <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
// //       </label>
// //       <label>
// //         Choose Series:
// //         <input type="text" value={series} onChange={(e) => setSeries(e.target.value)} />
// //       </label>
// //       <label>
// //         Select Model:
// //         <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
// //       </label>
// //       <label>
// //         Enter Min. Amount:
// //         <input type="number" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} />
// //       </label>
// //       <label>
// //         Enter Max. Amount:
// //         <input type="number" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
// //       </label>
// //       <button onClick={handleSubmit}>Update the entries</button>
// //     </div>
// //   );
// // };

// // export default RightForm;
// // RightForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const RightForm = ({ planId }) => {
//   const [type, setType] = useState('');
//   const [brand, setBrand] = useState('');
//   const [series, setSeries] = useState('');
//   const [model, setModel] = useState('');
//   const [minAmount, setMinAmount] = useState('');
//   const [maxAmount, setMaxAmount] = useState('');

//   const handleSubmit = async () => {
//     try {
//       await axios.post('http://localhost:8000/api/rightHandForm', {
//         planId,
//         type,
//         brand,
//         series,
//         model,
//         minAmount,
//         maxAmount,
//       });
//       console.log('Right-hand side form submitted successfully');
//     } catch (error) {
//       console.error('Error submitting right-hand side form:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Right-hand Side Prototype Form</h2>
//       <p>1. Select Plan: {planId}</p>
//       <label>
//         Choose Type:
//         <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
//       </label>
//       <label>
//         Select Brand:
//         <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
//       </label>
//       <label>
//         Choose Series:
//         <input type="text" value={series} onChange={(e) => setSeries(e.target.value)} />
//       </label>
//       <label>
//         Select Model:
//         <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
//       </label>
//       <label>
//         Enter Min. Amount:
//         <input type="number" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} />
//       </label>
//       <label>
//         Enter Max. Amount:
//         <input type="number" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
//       </label>
//       <button onClick={handleSubmit}>Update the entries</button>
//     </div>
//   );
// };

// export default RightForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RightForm = ({ planId }) => {
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [series, setSeries] = useState('');
  const [model, setModel] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  // Options for the type and brand dropdowns
  const typeOptions = ['Laptop', 'Smartphone', 'PC'];
  const brandOptions = ['Apple', 'HP', 'Lenovo'];
  // Series will be a number from 1 to 10
  const seriesOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8000/api/rightHandForm', {
        planId,
        type,
        brand,
        series,
        model,
        minAmount,
        maxAmount,
      });
      console.log('Right-hand side form submitted successfully');
    } catch (error) {
      console.error('Error submitting right-hand side form:', error);
    }
  };

  return (
    <div>
      <h2>Right-hand Side Prototype Form</h2>
      <p>1. Select Plan: {planId}</p>
      <label>
        Choose Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          {typeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Select Brand:
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="">Select Brand</option>
          {brandOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Choose Series:
        <select value={series} onChange={(e) => setSeries(e.target.value)}>
          <option value="">Select Series</option>
          {seriesOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label>
        Enter Model:
        <input type="text" value={model} onChange={(e) => setModel(e.target.value)} />
      </label>
      <label>
        Enter Min. Amount:
        <input type="number" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} />
      </label>
      <label>
        Enter Max. Amount:
        <input type="number" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Update the entries</button>
    </div>
  );
};

export default RightForm;
