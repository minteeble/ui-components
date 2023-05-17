import React from "react";
import { SelectFormFieldProps } from "./SelectFormField.types";

export const SelectFormField = (props: SelectFormFieldProps) => {
  return (
    <div className="form-field select-form-field">
      <input
        className="montserrat"
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        placeholder={props.placeholder || ""}
      />
    </div>
  );
};
