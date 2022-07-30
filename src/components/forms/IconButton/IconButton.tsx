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
import { IconButtonProps } from "./IconButton.types";

const IconButton = (props: IconButtonProps) => {
  return (
    <button
      className={"icon-button " + props.className}
      onClick={props.onClick ? props.onClick : () => {}}
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
