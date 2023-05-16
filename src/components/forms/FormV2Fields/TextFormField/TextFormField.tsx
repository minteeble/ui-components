import React from "react";
import { TextFormFieldProps } from "./TextFormField.types";

export const TextFormField = (props: TextFormFieldProps) => {
  return (
    <div className="form-field text-form-field">
      <input
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
      />
    </div>
  );
};
