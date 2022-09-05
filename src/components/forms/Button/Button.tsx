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
  };

  let type = props.actionType || ButtonActionType.Button;

  switch (type) {
    case ButtonActionType.Button:
      button = (
        <button
          className="button btn-primary"
          onClick={props.onClick || (() => {})}
        >
          {props.text}
        </button>
      );
      break;

    case ButtonActionType.Anchor:
      button = (
        <a
          className="button btn-primary"
          onClick={props.onClick || (() => {})}
          href={url}
          target="_blank"
        >
          {props.text}
        </a>
      );
      break;

    case ButtonActionType.Submit:
      button = (
        <input
          className="button btn-primary"
          onClick={props.onClick || (() => {})}
          type="submit"
          value={props.text}
        ></input>
      );
      break;
  }

  return button;
};

export default Button;
