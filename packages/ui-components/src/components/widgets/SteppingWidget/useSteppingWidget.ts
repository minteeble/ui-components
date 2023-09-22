import React, { useState } from "react";
import {
  SteppingWidgetLogic,
  UseSteppingWidgetProps,
} from "./SteppingWidget.types";

export const useSteppingWidget = (
  props: UseSteppingWidgetProps
): SteppingWidgetLogic => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(0);
  const [stepsNum, setStepsNum] = useState<number>(0);

  const goToStep = (stepIndex: number): void => {
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
      if (prevIndex === null) return 0;

      if (prevIndex < stepsNum - 1) {
        return prevIndex + 1;
      }

      return prevIndex;
    });
  };

  const prevStep = (): void => {
    setCurrentStepIndex((prevIndex) => {
      if (prevIndex === null || prevIndex <= 0) return null;
      return prevIndex - 1;
    });
  };

  return { currentStepIndex, goToStep, prevStep, nextStep, setSteps };
};
