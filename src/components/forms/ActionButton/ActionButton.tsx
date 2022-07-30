import React from "react";
import { IconButtonProps } from "../IconButton/IconButton.types";
import { Action, ActionButtonProps } from "./ActionButton.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose, faXmark } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";

const ActionButton = (props: ActionButtonProps) => {
  let iconButtonProps: IconButtonProps = {
    icon: null,
    className: "",
  };

  if (props.action === Action.Confirm) {
    iconButtonProps.icon = <FontAwesomeIcon icon={faCheck} />;
  }

  if (props.action === Action.Reject) {
    iconButtonProps.icon = <FontAwesomeIcon icon={faClose} />;
  }

  return <IconButton {...iconButtonProps} />;
};

export default ActionButton;
