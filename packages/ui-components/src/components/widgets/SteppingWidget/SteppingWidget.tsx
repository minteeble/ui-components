import React, { Children, useEffect } from "react";
import { Button } from "../../forms";
import { StepContextProvider } from "./StepContextProvider";
import { SteppingWidgetProps } from "./SteppingWidget.types";

export const SteppingWidget = (props: SteppingWidgetProps) => {
  const arrayChildren = Children.toArray(props.children);

  const isLastChild = (index: number) => {
    if (arrayChildren.length === 0) return false;
    return index === arrayChildren.length - 1;
  };

  useEffect(() => {
    if (arrayChildren && arrayChildren.length > 0) {
      props.logic.nextStep();
    }
  }, []);

  return (
    <div className="stepping-widget">
      {Children.map(arrayChildren, (child, index) => {
        const isCurrent = index === props.logic.currentStepIndex;
        const isSuccess =
          props.logic.currentStepIndex !== null &&
          index < props.logic.currentStepIndex;

        return (
          <StepContextProvider
            stepIndex={index}
            steppingWidgetLogic={props.logic}
          >
            <div
              className={`step-box ${isCurrent ? "current" : ""} ${
                isSuccess ? "success" : ""
              }`}
            >
              <div className="step-content">
                {index !== props.logic.currentStepIndex && (
                  <div className="step-box-cover"></div>
                )}
                {child}
              </div>
              {isCurrent && (
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
              )}
            </div>
          </StepContextProvider>
        );
      })}
    </div>
  );
};
