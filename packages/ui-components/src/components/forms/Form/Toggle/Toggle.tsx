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
import { ToggleProps } from "./Toggle.types";

const Toggle = (props: ToggleProps) => {
  let disabled = props.disabled || false;

  return (
    <div className={"toggle-wrapper" + (disabled ? " disabled" : "")}>
      <input
        type="checkbox"
        className={`toggle ${props.readonlyField ? "disabled" : ""}`}
        checked={props.value}
        disabled={disabled}
        readOnly={props.readonlyField ? true : false}
        onChange={(e) => {
          // @ts-ignore
          props.onValueChange(e.target.checked);
        }}
      />
      {props.label && <label className="toggle-label">{props.label}</label>}
    </div>
  );
};

export default Toggle;
