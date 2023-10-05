import React from "react";
import { StepContext } from "./StepContext";

export const useStep = () => {
  const context = React.useContext(StepContext);

  if (typeof context === undefined) {
    throw new Error("`useStep` must be within a `StepProvider`");
  }

  return context;
};
