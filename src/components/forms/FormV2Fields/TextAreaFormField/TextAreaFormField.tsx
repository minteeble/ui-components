import React, { useState } from "react";
import {
  TextAreaFormFieldProps,
  TextAreaFormFieldResizeOption,
} from "./TextAreaFormField.types";

export const TextAreaFormField = (props: TextAreaFormFieldProps) => {
  const resizeOptions = ["none", "vertical", "horizontal", "both"];

  return (
    <div
      className={`form-field text-area-form-field ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <textarea
        style={{
          resize: resizeOptions[
            props.readOnly || props.disabled
              ? TextAreaFormFieldResizeOption.None
              : props.attributes.enableResize ||
                TextAreaFormFieldResizeOption.None
          ] as any,
        }}
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
