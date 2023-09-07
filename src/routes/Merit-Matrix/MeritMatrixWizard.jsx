import React from 'react'
import StepWizard from 'react-step-wizard';
import MatrixType from './MatrixType'; // Import your step components
import PerformanceWeights from './PerformanceWeights'; // Import other step components

const MeritMatrixWizard = () => {
  return (
    <div>
      <StepWizard
        activeStep={activeStep}
        styleConfig={{
          stepBgColor: "lightblue", // Background color for inactive steps
          activeBgColor: "blue", // Background color for active step
          stepFontSize: "16px", // Font size for step labels
        }}
      >
        <MatrixType />
        <PerformanceWeights />
        {/* Add other step components here */}
      </StepWizard>
    </div>
  );
}

export default MeritMatrixWizard