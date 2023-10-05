import React, { createContext } from "react";
import { StepDataModel, SteppingWidgetLogic } from "./SteppingWidget.types";

export interface StepContextContent {
  /**
   * Current step
   */
  stepIndex?: number;

  /**
   * Current step data
   */
  stepData: StepDataModel;

  /**
   * Sets data for next step
   *
   * @param newData Object to be sat as input data for next step
   */
  setNextStepData(newData: StepDataModel): void;

  /**
   * General stepping widget logic object
   */
  steppingWidgetLogic?: SteppingWidgetLogic;

  /**
   * Goes to next step button
   */
  goNextStep(): void;

  /**
   * Mark the next step as ready to be triggered.
   * It enables the `next` button
   */
  nextStepReady(): void;

  /**
   * Specifies if next step is ready or not
   */
  isNextStepReady: boolean;
}

export const StepContext = createContext<StepContextContent>({
  stepData: {},

  setNextStepData: () => {
    throw new Error("Not initialized.");
  },

  goNextStep: () => {
    throw new Error("Not initialized.");
  },

  nextStepReady: () => {
    throw new Error("Not initialized.");
  },

  isNextStepReady: false,
});
