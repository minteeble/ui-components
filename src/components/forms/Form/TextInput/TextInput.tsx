import React from "react";
import { TextInputProps, TextInputType } from "./TextInput.types";

const TextInput = (props: TextInputProps) => {
  let textInputType = "text";

  if (props.type === TextInputType.Password) textInputType = "password";

  return (
    <div className="text-input-wrapper" style={props.style}>
      <input
        className="text-input"
        type={textInputType}
        value={props.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onValueChange(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default TextInput;
