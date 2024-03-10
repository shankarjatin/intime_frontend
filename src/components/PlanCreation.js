import React from 'react';
import LeftForm from './LeftForm';
import RightForm from './RightForm';

const PlanCreation = () => {
  const [planId, setPlanId] = React.useState(null);

  return (
    <div style={{ display: 'flex' }}>
      <LeftForm onRightFormSubmit={(planId) => setPlanId(planId)} />
      {planId && <RightForm planId={planId} />}
    </div>
  );
};

export default PlanCreation;
