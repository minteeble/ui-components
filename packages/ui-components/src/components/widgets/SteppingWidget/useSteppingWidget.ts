import React, { useEffect, useState } from "react";
import {
  SteppingWidgetLogic,
  SteppingWidgetNavigationPolicy,
  SteppingWidgetState,
  StepsArleadyCompletedError,
  UninitializedSteppingWidgetError,
  UseSteppingWidgetProps,
} from "./SteppingWidget.types";
import { SteppingWidgetUtils } from "./SteppingWidgetUtils";

export const useSteppingWidget = (
  props: UseSteppingWidgetProps
): SteppingWidgetLogic => {
  const defaultNavigationPolicy: SteppingWidgetNavigationPolicy = {
    toolbarEnabled: true,
    nextButtonEnabled: true,
    prevButtonEnabled: true,
  };

  const backButtonText = props.backButtonText || "Back";
  const nextButtonText = props.nextButtonText || "Next";
  const finishButtonText = props.finishButtonText || "Finish";

  // --- States --- //

  const [currentStepIndex, setCurrentStepIndex] = useState<
    number | SteppingWidgetState
  >(SteppingWidgetState.UNINITIALIZED);
  const [stepsCompleted, setStepsCompleted] = useState<boolean>(false);
  const [stepsNum, setStepsNum] = useState<number>(0);
  const [navigationConfig, setNavigationConfig] =
    useState<SteppingWidgetNavigationPolicy>(defaultNavigationPolicy);

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
      console.log("PrevIndex:", prevIndex);
      if (prevIndex === SteppingWidgetState.COMPLETED)
        throw new StepsArleadyCompletedError();

      if (prevIndex === SteppingWidgetState.UNINITIALIZED) return 0;

      if (prevIndex < stepsNum) {
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

  const isCurrentStep = (stepIndex: number): boolean => {
    return stepIndex === currentStepIndex;
  };

  const isSuccess = (stepIndex: number): boolean => {
    return (
      (currentStepIndex !== null && stepIndex < currentStepIndex) ||
      currentStepIndex === SteppingWidgetState.COMPLETED
    );
  };

  const isLastIndex = (stepIndex: number): boolean => {
    if (stepsNum === 0) return false;
    return stepIndex === stepsNum - 1;
  };

  // --- useEffects --- //

  useEffect(() => {
    if (currentStepIndex === SteppingWidgetState.COMPLETED) {
      setStepsCompleted(true);
    } else setStepsCompleted(false);
  }, [currentStepIndex]);

  useEffect(() => {
    setNavigationConfig(
      SteppingWidgetUtils.mergeNavigationPolicies(
        defaultNavigationPolicy,
        props.navigationConfig || defaultNavigationPolicy
      )
    );
  }, [props.navigationConfig]);

  return {
    currentStepIndex,
    stepsCompleted,
    navigationConfig,
    goToStep,
    prevStep,
    nextStep,
    setSteps,
    isCurrentStep,
    isSuccess,
    isLastIndex,
    backButtonText,
    nextButtonText,
    finishButtonText,
  };
};
