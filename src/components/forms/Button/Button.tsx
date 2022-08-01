/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React, { useState, useEffect } from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  return (
    <div className="button btn-primary" onClick={props.onClick || (() => {})}>
      {props.text}
    </div>
  );
};

export default Button;
