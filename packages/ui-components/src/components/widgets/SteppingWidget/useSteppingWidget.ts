import React, { useEffect, useState } from "react";
import {
  SteppingWidgetLogic,
  SteppingWidgetState,
  StepsArleadyCompletedError,
  UninitializedSteppingWidgetError,
  UseSteppingWidgetProps,
} from "./SteppingWidget.types";

export const useSteppingWidget = (
  props: UseSteppingWidgetProps
): SteppingWidgetLogic => {
  // --- States --- //
  const [currentStepIndex, setCurrentStepIndex] = useState<
    number | SteppingWidgetState
  >(SteppingWidgetState.UNINITIALIZED);

  const [stepsNum, setStepsNum] = useState<number>(0);

  // --- functions --- //

  const goToStep = (
    stepIndex: number | SteppingWidgetState.COMPLETED
  ): void => {
    console.log("Going to step:", stepIndex);
    setCurrentStepIndex(stepIndex);
  };

  const setSteps = (newSteps: number): void => {
    if (newSteps < 0)
      throw new Error("Steps value can not be a negative number");

    setStepsNum(newSteps);
  };

  const nextStep = (): void => {
    setCurrentStepIndex((prevIndex) => {
      if (prevIndex === SteppingWidgetState.COMPLETED)
        throw new StepsArleadyCompletedError();

      if (prevIndex === SteppingWidgetState.UNINITIALIZED) return 0;

      if (prevIndex < stepsNum - 1) {
        return prevIndex + 1;
      }

      return prevIndex;
    });
  };

  const prevStep = (): void => {
    setCurrentStepIndex((prevIndex) => {
      if (prevIndex === SteppingWidgetState.UNINITIALIZED)
        throw new UninitializedSteppingWidgetError();

      if (prevIndex === SteppingWidgetState.COMPLETED) return stepsNum - 1;

      if (prevIndex > 0) return prevIndex - 1;
      return prevIndex;
    });
  };

  // --- useEffects --- //

  return {
    currentStepIndex,
    goToStep,
    prevStep,
    nextStep,
    setSteps,
  };
};
