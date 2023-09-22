import React, { Children } from "react";
import { SteppingWidgetProps } from "./SteppingWidget.types";

export const SteppingWidget = (props: SteppingWidgetProps) => {
  const arrayChildren = Children.toArray(props.children);

  return (
    <>
      {Children.map(arrayChildren, (child, index) => {
        return <>Child: {child}</>;
      })}
    </>
  );
};
