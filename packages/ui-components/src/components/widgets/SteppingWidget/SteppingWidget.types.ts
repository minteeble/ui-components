import { PropsWithChildren } from "react";

/* --- Stepping Widget --- */

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

  goToStep(stepIndex: number): void;

  setSteps(newSteps: number): void;

  prevStep(): void;

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
