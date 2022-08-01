import React from "react";
import LoadingSpinner from "../LoadingSpinner";
import { LoadableComponentProps } from "./LoadableComponent.types";

const LoadableComponent = (props: LoadableComponentProps) => {
  let showCondition = props.showCondition || (() => false);

  return <>{showCondition(props.data) ? props.children : <LoadingSpinner />}</>;
};

export default LoadableComponent;
