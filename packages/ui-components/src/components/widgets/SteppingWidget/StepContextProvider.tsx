import { StepContext } from "./StepContext";
import React, { PropsWithChildren, useState } from "react";
import {
  StepDataModel,
  SteppingWidgetLogic,
  SteppingWidgetNavigationPolicy,
} from "./SteppingWidget.types";
import { Button, ButtonStyleType } from "../../forms";
import { useEffect } from "react";
import { SteppingWidgetUtils } from "./SteppingWidgetUtils";

export interface StepContextProviderProps extends PropsWithChildren {
  /**
   * Step index number
   */
  stepIndex: number;

  /**
   * SteppingWidget logic object
   */
  steppingWidgetLogic: SteppingWidgetLogic;

  /**
   * Text for `next` button
   */
  nextButtonText: string;

  /**
   * Text for `back` button
   */
  backButtonText: string;

  /**
   * Text for `finish` button
   */
  finishButtonText: string;
}

export const StepContextProvider = (props: StepContextProviderProps) => {
  // --- States --- //
  const [localNavigationSettings, setLocalNavigationSettings] =
    useState<SteppingWidgetNavigationPolicy>();
  const [finalNavigationSettings, setFinalNavigationSettings] =
    useState<SteppingWidgetNavigationPolicy>();
  const [internalNextStepReady, setInternalNextStepReady] =
    useState<boolean>(false);

  const backButtonText = props.backButtonText;
  const nextButtonText = props.nextButtonText;
  const finishButtonText = props.finishButtonText;

  const isLast = props.steppingWidgetLogic.isLastIndex(props.stepIndex);
  const isFirst = props.stepIndex === 0;

  const stepData = props.steppingWidgetLogic.stepsData[props.stepIndex];

  const setNextStepData = (newData: StepDataModel) => {
    props.steppingWidgetLogic.setStepData(props.stepIndex + 1, newData);
  };

  const goNextStep = (): void => {
    props.steppingWidgetLogic.nextStep();
  };

  const nextStepReady = (ready: boolean = true): void => {
    setInternalNextStepReady(ready);
  };

  // --- UseEffects --- //

  useEffect(() => {
    setFinalNavigationSettings(
      // Overwiretes the general settings only if component provider ones
      localNavigationSettings
        ? SteppingWidgetUtils.mergeNavigationPolicies(
            props.steppingWidgetLogic.navigationConfig,
            localNavigationSettings
          )
        : props.steppingWidgetLogic.navigationConfig
    );
  }, [props.steppingWidgetLogic.navigationConfig, localNavigationSettings]);

  return (
    <StepContext.Provider
      value={{
        stepIndex: props.stepIndex,
        steppingWidgetLogic: props.steppingWidgetLogic,
        stepData,
        setNextStepData,
        goNextStep,
        nextStepReady,
        isNextStepReady: internalNextStepReady,
      }}
    >
      {props.children}

      {finalNavigationSettings?.toolbarEnabled &&
        props.steppingWidgetLogic.isCurrentStep(props.stepIndex) && (
          <div className="step-toolbar">
            <Button
              disabled={!internalNextStepReady}
              text={isLast ? finishButtonText : nextButtonText}
              styleType={ButtonStyleType.Filled}
              onClick={() => {
                props.steppingWidgetLogic.nextStep();
              }}
            />
            {!isFirst && (
              <Button
                text={backButtonText}
                styleType={ButtonStyleType.Secondary}
                onClick={() => {
                  props.steppingWidgetLogic.prevStep();
                }}
              />
            )}
          </div>
        )}
    </StepContext.Provider>
  );
};
