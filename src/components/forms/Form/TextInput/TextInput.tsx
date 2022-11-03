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
import LoadingSpinner from "../../../common/LoadingSpinner";
import { TextInputProps, TextInputType } from "./TextInput.types";

const TextInput = (props: TextInputProps) => {
  let textInputType = "text";

  let disabled: boolean = props.disabled === true || props.loading === true;
  let loading: boolean = props.loading == true;

  if (props.textInputType === TextInputType.Password)
    textInputType = "password";
  if (props.textInputType === TextInputType.Email) textInputType = "email";

  return (
    <div className="text-input-wrapper" style={props.style}>
      {loading && <LoadingSpinner />}
      {props.label && <label className="text-input-label">{props.label}</label>}
      <input
        className="text-input"
        type={textInputType}
        value={props.value}
        placeholder={(props.value.length === 0 && props.placeHolder) || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onValueChange(e.target.value);
        }}
        disabled={disabled}
      ></input>
    </div>
  );
};

export default TextInput;
