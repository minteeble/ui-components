import React, { createContext } from "react";

export interface StepContextContent {
  stepIndex?: number;

  goToNextStep?(): void;

  goToPreviousStep?(): void;
}

export const StepContext = createContext<StepContextContent>({});
