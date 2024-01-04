import React, { useEffect, useState } from "react";
import {
  StepDataModel,
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
  const [stepsData, setInternalStepsData] = useState<Array<StepDataModel>>([]);
  const [onFinishCallback, setOnFinishCallback] = useState<() => void>(
    () => {}
  );

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

      if (prevIndex === stepsNum - 1) return SteppingWidgetState.COMPLETED;

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
      (currentStepIndex !== null &&
        typeof currentStepIndex === "number" &&
        stepIndex < currentStepIndex) ||
      currentStepIndex === SteppingWidgetState.COMPLETED
    );
  };

  const isLastIndex = (stepIndex: number): boolean => {
    if (stepsNum === 0) return false;
    return stepIndex === stepsNum - 1;
  };

  const setStepData = (stepIndex: number, data: StepDataModel): void => {
    if (stepIndex > 0 && stepIndex < stepsNum) {
      setInternalStepsData((oldData) => {
        oldData[stepIndex] = { ...data };

        return [...oldData];
      });
    }
  };

  const getStepData = (stepIndex: number): StepDataModel | null => {
    if (stepIndex > 0 && stepIndex < stepsNum) {
      return stepsData[stepIndex] || null;
    } else return null;
  };

  const onFinish = (callback: () => void) => {
    setOnFinishCallback(() => callback);
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

  useEffect(() => {
    if (stepsNum > stepsData.length) {
      setInternalStepsData((oldSteps) => {
        for (let i = stepsNum - 1; i < stepsData.length; i++) {
          oldSteps.push({});
        }

        return oldSteps;
      });
    }
  }, [stepsNum]);

  useEffect(() => {
    if (
      stepsCompleted &&
      currentStepIndex === SteppingWidgetState.COMPLETED &&
      onFinishCallback
    ) {
      console.log("Calling onFInish callback");
      onFinishCallback();
    }
  }, [stepsCompleted, currentStepIndex]);

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
    stepsData,
    setStepData,
    getStepData,
    onFinish,
  };
};
