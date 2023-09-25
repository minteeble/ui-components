import { StepContext } from "./StepContext";
import React, { PropsWithChildren, useState } from "react";
import {
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

  const backButtonText = props.backButtonText;
  const nextButtonText = props.nextButtonText;
  const finishButtonText = props.finishButtonText;

  const isLast = props.steppingWidgetLogic.isLastIndex(props.stepIndex);
  const isFirst = props.stepIndex === 0;

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
      }}
    >
      {props.children}

      {finalNavigationSettings?.toolbarEnabled &&
        props.steppingWidgetLogic.isCurrentStep(props.stepIndex) && (
          <div className="step-toolbar">
            {/* {!props.steppingWidgetLogic.isLastIndex(props.stepIndex) && (
              <Button
                text="Next"
                onClick={() => {
                  props.steppingWidgetLogic.nextStep();
                }}
              />
            )} */}
            <Button
              text={isLast ? finishButtonText : nextButtonText}
              styleType={ButtonStyleType.Filled}
              onClick={() => {
                props.steppingWidgetLogic.nextStep();
              }}
            />
            {!isFirst && (
              <Button
                text="Back"
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
