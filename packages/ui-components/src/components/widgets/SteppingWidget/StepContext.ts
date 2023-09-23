import React, { createContext } from "react";
import { SteppingWidgetLogic } from "./SteppingWidget.types";

export interface StepContextContent {
  stepIndex?: number;

  goToNextStep?(): void;

  goToPreviousStep?(): void;

  steppingWidgetLogic?: SteppingWidgetLogic;
}

export const StepContext = createContext<StepContextContent>({});
