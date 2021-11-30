import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';

export default function ProgressBar(props) {

  return (
    <MobileStepper id="practice-navbar" className="progress-bar"
      variant="progress"
      steps={props.steps}
      position="static"
      activeStep={props.activeStep}
      sx={{ width: 500}}
    />
  );
}