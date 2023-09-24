import { PropsWithChildren } from "react";

/* --- Stepping Widget --- */

/**
 * SteppingWIdget component props
 */
export interface SteppingWidgetProps extends PropsWithChildren {
  logic: SteppingWidgetLogic;
}

/* --- useSteppingWidget --- */

export interface UseSteppingWidgetProps {}

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

export interface SteppingWidgetLogic {
  /**
   * Specifies the current active step index.
   * Null if all steps were completed, or
   */
  currentStepIndex: number | SteppingWidgetState;

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
