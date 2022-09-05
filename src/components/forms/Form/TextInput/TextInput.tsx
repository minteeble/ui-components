import React from "react";
import LoadingSpinner from "../../../common/LoadingSpinner";
import { TextInputProps, TextInputType } from "./TextInput.types";

const TextInput = (props: TextInputProps) => {
  let textInputType = "text";

  let disabled: boolean = props.disabled === true || props.loading === true;
  let loading: boolean = props.loading == true;

  if (props.type === TextInputType.Password) textInputType = "password";

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
