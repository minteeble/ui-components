/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import { IconButtonProps } from "../IconButton/IconButton.types";
import { Action, ActionButtonProps } from "./ActionButton.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircle,
  faCirclePlus,
  faClose,
  faPen,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import IconButton from "../IconButton/IconButton";

const ActionButton = (props: ActionButtonProps) => {
  let iconButtonProps: IconButtonProps = {
    icon: null,
    className: "",
    size: props.size,
    onClick: props.onClick,
  };

  switch (props.action) {
    case Action.Confirm:
      iconButtonProps.icon = <FontAwesomeIcon icon={faCheck} />;
      break;

    case Action.Reject:
      iconButtonProps.icon = <FontAwesomeIcon icon={faClose} />;
      break;

    case Action.Edit:
      iconButtonProps.icon = <FontAwesomeIcon icon={faPen} />;
      break;

    case Action.Delete:
      iconButtonProps.icon = <FontAwesomeIcon icon={faTrash} />;
      break;

    case Action.Add:
      iconButtonProps.icon = <FontAwesomeIcon icon={faPlus} />;
      break;
  }

  return <IconButton {...iconButtonProps} />;
};

export default ActionButton;
