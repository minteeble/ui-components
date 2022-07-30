import React from "react";
import { IconButtonProps } from "./IconButton.types";

const IconButton = (props: IconButtonProps) => {
  return (
    <button className={"icon-button " + props.className}>{props.icon}</button>
  );
};

export default IconButton;
