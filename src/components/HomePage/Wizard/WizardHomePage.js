import React from "react";
import "../HomePage.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";

import StepButton from "@mui/material/StepButton";

//const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']
function WizardHomePage() {
  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const theme = createTheme();

  theme.typography.p = {
    fontSize: "14px",
    flexGrow: 1,
    textAlign: "center",
    "@media (min-width:600px)": {
      fontSize: "14px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "14px",
    },
  };

  return (
    <>
      <div
        className="container-fluid"
        style={{
          paddingTop: "7rem",
          paddingLeft: "3rem",
          width: "100%",
          color: "black",
          fontSize: "10px",
          marginRight: "4rem",
        }}
      >
        <div className="row">
          <div className="col xs-6 col-md-6 how-img">
            <Box sx={{ width: "100%" }}>
              <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step key={step.label} completed={completed[index]}>
                    <StepButton onClick={handleStep(index)}>
                      <StepLabel variant="h4">{step.label}</StepLabel>
                    </StepButton>
                    <StepContent>
                      <ThemeProvider theme={theme}>
                        <Typography variant="p">{step.description}</Typography>
                      </ThemeProvider>
                      {/* <Typography>{step.description}</Typography> */}
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </div>

          <div className=" col xs-6 col-md-6 how-img">
            <img
              src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WizardHomePage;
