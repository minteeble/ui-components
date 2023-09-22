import { PropsWithChildren } from "react";

export interface SteppingWidgetProps extends PropsWithChildren {
  logic: SteppingWidgetLogic;
}

export interface UseSteppingWidgetProps {}

export interface SteppingWidgetLogic {
  currentStepIndex: number | null;

  goToStep(stepIndex: number): void;

  setSteps(newSteps: number): void;

  prevStep(): void;

  nextStep(): void;
}
