import React from "react";
import { TextInputProps, TextInputType } from "./TextInput.types";

const TextInput = (props: TextInputProps) => {
  let textInputType = "text";

  if (props.type === TextInputType.Password) textInputType = "password";

  return (
    <div className="text-input-wrapper" style={props.style}>
      {props.label && <label className="text-input-label">{props.label}</label>}
      <input
        className="text-input"
        type={textInputType}
        value={props.value}
        placeholder={(props.value.length === 0 && props.placeHolder) || ""}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onValueChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default TextInput;
