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
import { ButtonActionType, ButtonProps, ButtonStyleType } from "./Button.types";
import {
  LoadingSpinner,
  LoadingSpinnerColor,
} from "./../../common/LoadingSpinner";

const Button = (props: ButtonProps) => {
  const [isPending, setIsPending] = useState<boolean>(false);

  let button = <></>;

  let url = props.url || "#";
  let disabled = props.disabled || false;
  let loading = props.loading || false;
  let style = props.styleType || ButtonStyleType.Filled;

  const buttonStyles = ["btn-primary", "btn-danger", "btn-secondary"];

  let commonButtonProps = {
    className: `button ${buttonStyles[(style || ButtonStyleType.Filled) - 1]} ${
      isPending ? "pending" : ""
    }`,
    disabled: disabled,
    onClick:
      typeof props.onClick !== "undefined"
        ? async () => {
            if (!isPending) {
              setIsPending(true);
              await props.onClick!();
              setIsPending(false);
            }
          }
        : () => {},
  };

  let type = props.actionType || ButtonActionType.Button;

  switch (type) {
    case ButtonActionType.Button:
      button = (
        <button {...commonButtonProps}>
          {props.text}
          {isPending && (
            <div className="spinner-wrapper">
              <LoadingSpinner
                color={
                  props.styleType === ButtonStyleType.Secondary
                    ? LoadingSpinnerColor.Primary
                    : LoadingSpinnerColor.White
                }
              />
            </div>
          )}
        </button>
      );
      break;

    case ButtonActionType.Anchor:
      button = (
        <a {...commonButtonProps} href={url} target="_blank">
          {props.text}
          {isPending && (
            <div className="spinner-wrapper">
              <LoadingSpinner
                color={
                  props.styleType === ButtonStyleType.Secondary
                    ? LoadingSpinnerColor.Primary
                    : LoadingSpinnerColor.White
                }
              />
            </div>
          )}{" "}
        </a>
      );
      break;

    case ButtonActionType.Submit:
      button = (
        <>
          <div className="input-button-wrapper">
            <input
              {...commonButtonProps}
              type="submit"
              value={props.text}
            ></input>
            {isPending && (
              <div className="spinner-wrapper">
                <LoadingSpinner
                  color={
                    props.styleType === ButtonStyleType.Secondary
                      ? LoadingSpinnerColor.Primary
                      : LoadingSpinnerColor.White
                  }
                />
              </div>
            )}
          </div>
        </>
      );
      break;
  }

  return button;
};

export default Button;
