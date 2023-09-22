import { StepContext } from "./StepContext";
import React, { PropsWithChildren } from "react";
import { SteppingWidgetLogic } from "./SteppingWidget.types";

export interface StepContextProviderProps extends PropsWithChildren {
  stepIndex: number;

  steppingWidgetLogic: SteppingWidgetLogic;
}

export const StepContextProvider = (props: StepContextProviderProps) => {
  const goToNextStep = (): void => {
    props.steppingWidgetLogic;
  };

  const goToPreviousStep = (): void => {};

  return (
    <StepContext.Provider
      value={{ stepIndex: props.stepIndex, goToNextStep, goToPreviousStep }}
    >
      {props.children}
    </StepContext.Provider>
  );
};
