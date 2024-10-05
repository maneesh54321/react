import { Fragment } from "react/jsx-runtime";
import classes from "./Stepper.module.css";

const Stepper = ({
  activeStep = 2,
  steps,
}: {
  activeStep: number;
  steps: string[];
}) => {
  const checkMark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0.5 0 20 20"
    >
      <rect
        width="18.5"
        height="18.5"
        x="1.25"
        y="0.75"
        fill="#5585F8"
        rx="9.25"
      ></rect>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M16.672 7.373a1.068 1.068 0 00-1.48-1.54L11 9.856l-1.978 1.899-2.199-2.2a1.068 1.068 0 10-1.51 1.511l2.952 2.952c.404.404 1.056.41 1.468.015L11 12.818z"
        clipRule="evenodd"
      ></path>
      <rect
        width="18.5"
        height="18.5"
        x="1.25"
        y="0.75"
        stroke="#5585F8"
        strokeWidth="1.5"
        rx="9.25"
      ></rect>
    </svg>
  );

  return (
    <div className={classes.stepper}>
      {steps.map((step, idx) => {
        const stepNum = idx + 1;
        let stepNumClasses = classes.stepNum;
        if (activeStep > stepNum) {
          stepNumClasses += " " + classes.completed;
        } else if (activeStep === stepNum) {
          stepNumClasses += " " + classes.active;
        }

        let lineClasses = classes.line;
        if (activeStep > stepNum) {
          lineClasses += " " + classes.active;
        }

        if (idx === steps.length - 1) {
          return (
            <Fragment key={idx}>
              <div className={classes.step}>
                <div className={stepNumClasses}>
                  {activeStep > stepNum ? checkMark : stepNum}
                </div>
                <div className={classes.stepLabel}>{step}</div>
              </div>
            </Fragment>
          );
        } else {
          return (
            <Fragment key={idx}>
              <div className={classes.step}>
                <div className={stepNumClasses}>
                  {activeStep > stepNum ? checkMark : stepNum}
                </div>
                <div className={classes.stepLabel}>{step}</div>
              </div>
              <div className={lineClasses}></div>
            </Fragment>
          );
        }
      })}
    </div>
  );
};

export default Stepper;
