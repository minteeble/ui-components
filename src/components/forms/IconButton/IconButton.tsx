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
import { ComponentSize } from "../../../models";
import { IconButtonProps } from "./IconButton.types";

const IconButton = (props: IconButtonProps) => {
  const sizeClasses = ["small", "default", "large"];

  const sizeClassName =
    sizeClasses[
      typeof props.size !== "undefined" ? props.size : ComponentSize.Default
    ];

  return (
    <button
      className={`icon-button ${props.className} ${sizeClassName}`}
      onClick={
        props.onClick
          ? props.onClick
          : (e) => {
              e.preventDefault();
            }
      }
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
