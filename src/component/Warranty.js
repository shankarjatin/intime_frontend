// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Modal from 'react-modal';
// // import "./Warranty.css";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faPencilAlt, faEye, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

// // const Warranty = () => {
// //   const [plans, setPlans] = useState([]);
// //   const [selectedPlan, setSelectedPlan] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   useEffect(() => {
// //     axios.get('http://localhost:8000/api/plans')
// //       .then(response => {
// //         const modifiedPlans = response.data.map(plan => ({
// //           ...plan,
// //           yearly: calculateYearly(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount),
// //           monthly: calculateMonthly(calculateYearly(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount)),
// //           deductibleCost: calculateDeductibleCost(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount, plan.leftFormData.deductibles[0]?.value)
// //         }));
// //         setPlans(modifiedPlans);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching plans:', error);
// //       });
// //   }, []);

// //   const calculateYearly = (minAmount, maxAmount) => {
// //     return (minAmount + maxAmount) / 2;
// //   };

// //   const calculateDeductibleCost = (minAmount, maxAmount, deductiblePercentage) => {
// //     const middleAmount = (minAmount + maxAmount) / 2;
// //     return middleAmount * (deductiblePercentage / 100);
// //   };

// //   const calculateMonthly = (yearly) => {
// //     return yearly / 12;
// //   };

// //   const handleEyeClick = (plan) => {
// //     setSelectedPlan(plan);
// //     setIsModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedPlan(null);
// //   };

// //   return (
// //     <div className="table-container">
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Plan Name</th>
// //             <th>Plan Metric</th>
// //             <th>Deductible Name</th>
// //             <th>Deductible Metric Value</th>
// //             <th>Yearly</th>
// //             <th>Monthly</th>
// //             <th>Max</th>
// //             <th>Min</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {plans.map((plan, index) => (
// //             <tr key={index}>
// //               <td>Plan {index + 1}</td>
// //               <td>{plan.leftFormData.planMetricType}</td>
// //               <td>{plan.leftFormData.deductibles[0]?.name}</td>
// //               <td>{plan.leftFormData.deductibles[0]?.value}</td>
// //               <td>{plan.yearly || '-'}</td>
// //               <td>{plan.monthly || '-'}</td>
// //               <td>{plan.rightFormData[0]?.maxAmount || '-'}</td>
// //               <td>{plan.rightFormData[0]?.minAmount || '-'}</td>
// //               <td>
// //                 <button><FontAwesomeIcon icon={faPencilAlt} /></button>
// //                 <button onClick={() => handleEyeClick(plan)}><FontAwesomeIcon icon={faEye} /></button>
// //                 <button><FontAwesomeIcon icon={faTrashAlt} /></button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>

// //       <Modal
// //         isOpen={isModalOpen}
// //         onRequestClose={handleCloseModal}
// //         className="modal-content"
// //         overlayClassName="modal-overlay"
// //       >
// //         <div className="close-icon" onClick={handleCloseModal}><FontAwesomeIcon icon={faTimes} /></div>
// //         <h2>Plan Details</h2>
// //         <div className="details-container">
// //           <div className="details-section">
// //             <p><strong>Plan Name:</strong> {selectedPlan?.leftFormData.planName}</p>
// //             <p><strong>Plan Metric Value:</strong> {selectedPlan?.leftFormData.planMetricValue}</p>
// //             <p><strong>Deductible Name:</strong> {selectedPlan?.leftFormData.deductibles[0]?.name}</p>
// //             <p><strong>Deductible Metric Value:</strong> {selectedPlan?.leftFormData.deductibles[0]?.value}</p>
           
// //           </div>
// //           <div className="details-section">
// //             <p><strong>Type:</strong> {selectedPlan?.rightFormData[0]?.type}</p>
// //             <p><strong>Brand:</strong> {selectedPlan?.rightFormData[0]?.brand}</p>
// //             <p><strong>Series:</strong> {selectedPlan?.rightFormData[0]?.series}</p>
// //             <p><strong>Model:</strong> {selectedPlan?.rightFormData[0]?.model}</p>
// //             <p><strong>Result</strong> </p>
// //             <p><strong>Yearly Cost:</strong> {selectedPlan?.yearly || '-'}</p>
// //             <p><strong>Monthly Cost:</strong> {selectedPlan?.monthly || '-'}</p>
// //             <p><strong>Deductible Cost:</strong> {selectedPlan?.deductibleCost || '-'}</p>
// //           </div>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default Warranty;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-modal';
// import "./Warranty.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencilAlt, faEye, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

// const Warranty = () => {
//   const [plans, setPlans] = useState([]);
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/plans')
//       .then(response => {
//         const modifiedPlans = response.data.map(plan => ({
//           ...plan,
//           yearly: calculateYearly(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount),
//           monthly: calculateMonthly(calculateYearly(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount)),
//           deductibleCost: calculateDeductibleCost(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount, plan.leftFormData.deductibles[0]?.value)
//         }));
//         setPlans(modifiedPlans);
//       })
//       .catch(error => {
//         console.error('Error fetching plans:', error);
//       });
//   }, []);

//   const calculateYearly = (minAmount, maxAmount) => {
//     return (minAmount + maxAmount) / 2;
//   };

//   const calculateDeductibleCost = (minAmount, maxAmount, deductiblePercentage) => {
//     const middleAmount = (minAmount + maxAmount) / 2;
//     return middleAmount * (deductiblePercentage / 100);
//   };

//   const calculateMonthly = (yearly) => {
//     return yearly / 12;
//   };

//   const handleEyeClick = (plan) => {
//     setSelectedPlan(plan);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedPlan(null);
//   };

//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th>Plan Name</th>
//             <th>Plan Metric</th>
//             <th>Deductible Name</th>
//             <th>Deductible Metric Value</th>
//             <th>Yearly</th>
//             <th>Monthly</th>
//             <th>Max</th>
//             <th>Min</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {plans.map((plan, index) => (
//             <tr key={index}>
//               <td>Plan {index + 1}</td>
//               <td>{plan.leftFormData.planMetricType}</td>
//               <td>
//                 {plan.leftFormData.deductibles.map((deductible, index) => (
//                   <p key={index}>{deductible.name}</p>
//                 ))}
//               </td>
//               <td>
//                 {plan.leftFormData.deductibles.map((deductible, index) => (
//                   <p key={index}>{deductible.value}</p>
//                 ))}
//               </td>
//               <td>{plan.yearly || '-'}</td>
//               <td>{plan.monthly || '-'}</td>
//               <td>{plan.rightFormData[0]?.maxAmount || '-'}</td>
//               <td>{plan.rightFormData[0]?.minAmount || '-'}</td>
//               <td>
//                 <button><FontAwesomeIcon icon={faPencilAlt} /></button>
//                 <button onClick={() => handleEyeClick(plan)}><FontAwesomeIcon icon={faEye} /></button>
//                 <button><FontAwesomeIcon icon={faTrashAlt} /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={handleCloseModal}
//         className="modal-content"
//         overlayClassName="modal-overlay"
//       >
//         <div className="close-icon" onClick={handleCloseModal}><FontAwesomeIcon icon={faTimes} /></div>
//         <h2>Plan Details</h2>
//         <div className="details-container">
//           <div className="details-section">
//             <p><strong>Plan Name:</strong> {selectedPlan?.leftFormData.planName}</p>
//             <p><strong>Plan Metric Value:</strong> {selectedPlan?.leftFormData.planMetricValue}</p>
//             <p><strong>Yearly:</strong> {selectedPlan?.yearly || '-'}</p>
//             <p><strong>Monthly:</strong> {selectedPlan?.monthly || '-'}</p>
//           </div>
//           <div className="details-section">
//             <p><strong>Type:</strong> {selectedPlan?.rightFormData[0]?.type}</p>
//             <p><strong>Brand:</strong> {selectedPlan?.rightFormData[0]?.brand}</p>
//             <p><strong>Series:</strong> {selectedPlan?.rightFormData[0]?.series}</p>
//             <p><strong>Model:</strong> {selectedPlan?.rightFormData[0]?.model}</p>
//             <p><strong>Deductible Cost:</strong> {selectedPlan?.deductibleCost || '-'}</p>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Warranty;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import "./Warranty.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faEye, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

const Warranty = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://intime-backend.onrender.com/api/plans')
      .then(response => {
        const modifiedPlans = response.data.map(plan => ({
          ...plan,
          yearly: calculateYearly(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount),
          monthly: calculateMonthly(calculateYearly(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount)),
          deductibleCost: calculateDeductibleCost(plan.rightFormData[0]?.minAmount, plan.rightFormData[0]?.maxAmount, plan.leftFormData.deductibles[0]?.value)
        }));
        setPlans(modifiedPlans);
      })
      .catch(error => {
        console.error('Error fetching plans:', error);
      });
  }, []);

  const calculateYearly = (minAmount, maxAmount) => {
    return (minAmount + maxAmount) / 2;
  };

  const calculateDeductibleCost = (minAmount, maxAmount, deductiblePercentage) => {
    const middleAmount = (minAmount + maxAmount) / 2;
    return middleAmount * (deductiblePercentage / 100);
  };

  const calculateMonthly = (yearly) => {
    return yearly / 12;
  };

  const handleEyeClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Plan Name</th>
            <th>Plan Metric</th>
            <th>Deductible Name</th>
            <th>Deductible Metric Value</th>
            <th>Yearly</th>
            <th>Monthly</th>
            <th>Max</th>
            <th>Min</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr key={index}>

              <td>Plan {index + 1}</td>
              <td>{plan.leftFormData.planMetricType}</td>
              <td>
                {plan.leftFormData.deductibles.map((deductible, index) => (
                  <p key={index}>{deductible.name}</p>
                ))}
              </td>
              <td>
                {plan.leftFormData.deductibles.map((deductible, index) => (
                  <p key={index}>{deductible.value}</p>
                ))}
              </td>
              <td>{plan.yearly || '-'}</td>
              <td>{plan.monthly || '-'}</td>
              <td>{plan.rightFormData[0]?.maxAmount || '-'}</td>
              <td>{plan.rightFormData[0]?.minAmount || '-'}</td>
              <td>
                <button><FontAwesomeIcon icon={faPencilAlt} /></button>
                <button onClick={() => handleEyeClick(plan)}><FontAwesomeIcon icon={faEye} /></button>
                <button><FontAwesomeIcon icon={faTrashAlt} /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
  isOpen={isModalOpen}
  onRequestClose={handleCloseModal}
  className="modal-content"
  overlayClassName="modal-overlay"
>
  <div className="close-icon" onClick={handleCloseModal}><FontAwesomeIcon icon={faTimes} /></div>
  <h2>Plan Details</h2>
  <div className="details-container">
    <div className="details-section">
      <p><strong>Plan Name:</strong> {selectedPlan?.leftFormData.planName}</p>
      <p><strong>Plan Metric Value:</strong> {selectedPlan?.leftFormData.planMetricValue}</p>
      {selectedPlan?.leftFormData.deductibles.map((deductible, index) => (
        <React.Fragment key={index}>
          <p><strong>Deductible Name:</strong> {deductible.name}</p>
          <p><strong>Deductible Metric Value:</strong> {deductible.value}</p>
        </React.Fragment>
      ))}
    
    </div>
    <div className="details-section">
      <p><strong>Type:</strong> {selectedPlan?.rightFormData[0]?.type}</p>
      <p><strong>Brand:</strong> {selectedPlan?.rightFormData[0]?.brand}</p>
      <p><strong>Series:</strong> {selectedPlan?.rightFormData[0]?.series}</p>
      <p><strong>Model:</strong> {selectedPlan?.rightFormData[0]?.model}</p>
      <p><strong>Result</strong></p>
      <p><strong>Yearly Cost:</strong> {selectedPlan?.yearly || '-'}</p>
      <p><strong>Monthly Cost:</strong> {selectedPlan?.monthly || '-'}</p>
      <p><strong>Deductible Cost:</strong> {selectedPlan?.deductibleCost || '-'}</p>
    </div>
  </div>
</Modal>

    </div>
  );
};

export default Warranty;
