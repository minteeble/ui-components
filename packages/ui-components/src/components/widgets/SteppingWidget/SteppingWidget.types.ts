import { PropsWithChildren } from "react";

/* --- Stepping Widget --- */

/**
 * SteppingWIdget component props
 */
export interface SteppingWidgetProps extends PropsWithChildren {
  logic: SteppingWidgetLogic;
}

/* --- useSteppingWidget --- */

export interface SteppingWidgetNavigationPolicy {
  /**
   * Specifies if toolbar is enabled or not. (default to true)
   */
  toolbarEnabled?: boolean;

  /**
   * Specifies if `Next` button is enabled or not.
   * N.B. In order to be enabled, it also required the toolbar to be enabled
   */
  nextButtonEnabled?: boolean;

  /**
   * Specifies if `Back` button is enabled or not.
   * N.B. In order to be enabled, it also required the toolbar to be enabled
   */
  prevButtonEnabled?: boolean;
}

export interface UseSteppingWidgetProps {
  /**
   * SteppingWidget navigation policy
   */
  navigationConfig?: SteppingWidgetNavigationPolicy;

  /**
   * Text for `next` button
   */
  nextButtonText?: string;

  /**
   * Text for `back` button
   */
  backButtonText?: string;

  /**
   * Text for `finish` button
   */
  finishButtonText?: string;
}

/**
 * Stepping widget states
 */
export enum SteppingWidgetState {
  /**
   * Specifies widget has not been initialized yet
   */
  UNINITIALIZED = "UNINITIALIZED",

  /**
   * All steps were completed
   */
  COMPLETED = "COMPLETED",
}

/**
 * Interface model for data shared between models
 */
export interface StepDataModel {
  [key: string]: any;
}

export interface SteppingWidgetLogic {
  /**
   * Specifies the current active step index.
   * Null if all steps were completed, or
   */
  currentStepIndex: number | SteppingWidgetState;

  /**
   * True if steps were all completed
   */
  stepsCompleted: boolean;

  /**
   * General navigation config. They con ve overwritten by each step
   */
  navigationConfig: SteppingWidgetNavigationPolicy;

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

  /**
   * Set data for a specific step
   *
   * @param stepIndex Step index to set data to
   * @param data Data object
   */
  setStepData(stepIndex: number, data: StepDataModel): void;

  /**
   * Get data of a specific step
   *
   * @param stepIndex Step index to get data from
   * @returns The step data model if existing (or unset, by defualt empty object), null if index does not exist
   */
  getStepData(stepIndex: number): StepDataModel | null;

  /**
   * List of all steps data
   */
  stepsData: Array<StepDataModel>;

  /**
   * Go to ste specified step. It can be a step index (number) or a state (uninitialized or completed)
   *
   * @param stepIndex Specifies the step to move to.
   */
  goToStep(stepIndex: number | SteppingWidgetState): void;

  /**
   * Set the number of steps
   *
   * @param newSteps Number of new steps to set
   */
  setSteps(newSteps: number): void;

  /**
   * Goes to the previous step
   */
  prevStep(): void;

  /**
   * Goes to the next step
   */
  nextStep(): void;

  /**
   * Checks if step is the current one
   *
   * @param stepIndex Step index to check
   */
  isCurrentStep(stepIndex: number): boolean;

  /**
   * Checks if step was completed
   *
   * @param stepIndex Step index to check
   */
  isSuccess(stepIndex: number): boolean;

  /**
   * Checks if a step is the last one
   *
   * @param stepIndex Step index to check
   */
  isLastIndex(stepIndex: number): boolean;

  /**
   * Sets callback triggered once steps are completed
   *
   * @param callback Function callback
   */
  onFinish(callback: () => void): void;
}

/**
 * Custom exception for handling when trying to set a negative number as steps value, inside `useSteppingWidget`
 */
export class NegativeStepNumberError extends Error {
  constructor() {
    super("Steps value can not be a negative number");
    Object.setPrototypeOf(this, NegativeStepNumberError.prototype);
  }
}

/**
 * Handle cases when trying to set the next step when steps have been already completed
 */
export class StepsArleadyCompletedError extends Error {
  constructor() {
    super("Steps have been already completed");
    Object.setPrototypeOf(this, StepsArleadyCompletedError.prototype);
  }
}

/**
 * Handles cases when trying to edit an uninitialized stepping widget
 */
export class UninitializedSteppingWidgetError extends Error {
  constructor() {
    super("Steps have not been initialized yet");
    Object.setPrototypeOf(this, UninitializedSteppingWidgetError.prototype);
  }
}
