import React, { useState } from 'react'
import Merit_metrix_left from '../routes/Merit-Matrix/Merit_metrix_left/Merit_metrix_left'
import Matrix_type from '../routes/Merit-Matrix/Merit_metrix_right/Matrix_type/Matrix_type';
import Performance_weights from '../routes/Merit-Matrix/Merit_metrix_right/Performance_weights/Performance_weights';
import Parity_weights from '../routes/Merit-Matrix/Merit_metrix_right/Parity_weights/Parity_weights';
import Budget from '../routes/Merit-Matrix/Merit_metrix_right/Budget/Budget';
import Pay_gap_manager from '../routes/Merit-Matrix/Merit_metrix_right/Pay_gap_manager/Pay_gap_manager';


const Merit_matrix = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false); 
  const closePopup = () => {
    setShowPopup(false);
  };
const handleNext = () => {
  if (activeStep < 5) {
    setActiveStep(activeStep + 1);
  }else if(activeStep===5){
    setShowPopup(true);
  }
};const handleBack = () => {
  if (activeStep > 1) {
    setActiveStep(activeStep - 1);
  }
};  

  return (
    <>
      <div className="flex">
        <Merit_metrix_left activeStep={activeStep} />
        <div className="right-side">
          {activeStep === 1 && <Matrix_type />}
          {activeStep === 2 && <Performance_weights />}
          {activeStep === 3 && <Parity_weights />}
          {activeStep === 4 && <Budget />}
          {activeStep === 5 && <Pay_gap_manager />}

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
              disabled={activeStep === 6}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="pop mx-auto ">
          <div className="popup-content">
            <h2 className="font-semibold">Pay Gaps in &#123; Group 1 &#125;</h2>
            <table className="popup-table">
              <tbody>
                <tr>
                  <td>Emp.ID</td>
                  <td>Name</td>
                  <td>Title</td>
                  <td>Current Pay</td>
                  <td>Pay Gap</td>
                  <td>Select</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>

            
            <div className="button-container popup-btn ">
              <button
                className="back_button"
                onClick={closePopup}
               
              >
                Back
              </button>
              <button
                className="continue_button"
                onClick={closePopup}
                
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Merit_matrix