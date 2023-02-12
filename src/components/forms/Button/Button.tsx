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
import { ButtonActionType, ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  let button = <></>;

  let url = props.url || "#";
  let disabled = props.disabled || false;
  let loading = props.loading || false;

  let commonButtonProps = {
    className: "button btn-primary",
    disabled: disabled,
    onClick: props.onClick || (() => {}),
  };

  let type = props.actionType || ButtonActionType.Button;

  switch (type) {
    case ButtonActionType.Button:
      button = <button {...commonButtonProps}>{props.text}</button>;
      break;

    case ButtonActionType.Anchor:
      button = (
        <a href={url} target="_blank">
         <button>  {props.text} </button>
        </a>
      );
      break;

    case ButtonActionType.Submit:
      button = (
        <input {...commonButtonProps} type="submit" value={props.text}></input>
      );
      break;
  }

  return button;
};

export default Button;
