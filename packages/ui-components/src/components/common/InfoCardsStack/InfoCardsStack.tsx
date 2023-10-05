import React from "react";
import { InfoCardsStackProps } from "./InfoCardsStack.types";

export const InfoCardsStack = (props: InfoCardsStackProps) => {
  return (
    <div
      className={`info-cards-stack ${props.className}`}
      style={props.style || {}}
    >
      {props.children}
    </div>
  );
};
