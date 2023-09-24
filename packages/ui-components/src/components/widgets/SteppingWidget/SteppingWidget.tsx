import React, { Children, useEffect } from "react";
import { Button } from "../../forms";
import { StepContextProvider } from "./StepContextProvider";
import { SteppingWidgetProps } from "./SteppingWidget.types";

export const SteppingWidget = (props: SteppingWidgetProps) => {
  const arrayChildren = Children.toArray(props.children);

  useEffect(() => {
    if (arrayChildren && arrayChildren.length > 0) {
      props.logic.setSteps(arrayChildren.length);
      props.logic.nextStep();
    }
  }, []);

  return (
    <div className="stepping-widget">
      {Children.map(arrayChildren, (child, index) => {
        return (
          <div
            className={`step-box ${
              props.logic.isCurrentStep(index) ? "current" : ""
            } ${props.logic.isSuccess(index) ? "success" : ""}`}
          >
            <StepContextProvider
              stepIndex={index}
              steppingWidgetLogic={props.logic}
            >
              <div className="step-content">
                {index !== props.logic.currentStepIndex && (
                  <div className="step-box-cover"></div>
                )}
                {child}
              </div>

              {/* {isCurrent && (
                <div className="step-toolbar">
                  {!isLastChild(index) && (
                    <Button
                      text="Next"
                      onClick={() => {
                        props.logic.goToStep(index + 1);
                      }}
                    />
                  )}
                </div>
              )} */}
            </StepContextProvider>
          </div>
        );
      })}
    </div>
  );
};
