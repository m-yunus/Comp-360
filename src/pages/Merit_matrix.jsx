import React, { useState } from 'react'
import Merit_metrix_left from '../routes/Merit-Matrix/Merit_metrix_left/Merit_metrix_left'
import Matrix_type from '../routes/Merit-Matrix/Merit_metrix_right/Matrix_type/Matrix_type';
import Performance_weights from '../routes/Merit-Matrix/Merit_metrix_right/Performance_weights/Performance_weights';
import Parity_weights from '../routes/Merit-Matrix/Merit_metrix_right/Parity_weights/Parity_weights';


const Merit_matrix = () => {
  const [activeStep, setActiveStep] = useState(1);
const handleNext = () => {
  if (activeStep < 5) {
    setActiveStep(activeStep + 1);
  }
};const handleBack = () => {
  if (activeStep > 1) {
    setActiveStep(activeStep - 1);
  }
};  const rightSideComponents = [
  <Matrix_type />,
  <Performance_weights />,
  <Parity_weights/>
  
];
  return (
    <>
      <div className="flex">
        <Merit_metrix_left />
        <div className="right-side">
          {rightSideComponents[activeStep - 1]}{" "}
          {/* Render the active component */}
          <div className="button-container mt-40">
            <button
              className="back_button"
              onClick={handleBack}
              disabled={activeStep === 1}
            >
              Back
            </button>
            <button
              className="continue_button"
              onClick={handleNext}
              disabled={activeStep === 5}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Merit_matrix