import React, { useEffect, useRef, useState } from "react";
import {
  TextAreaFormFieldProps,
  TextAreaFormFieldResizeOption,
} from "./TextAreaFormField.types";

export const TextAreaFormField = (props: TextAreaFormFieldProps) => {
  const resizeOptions = ["none", "vertical", "horizontal", "both"];

  const textArea = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textArea.current) {
      textArea.current.style.height = "inherit";
      textArea.current.style.height = `${textArea.current.scrollHeight}px`;
      textArea.current.style.height = `${Math.min(
        textArea.current.scrollHeight,
        240
      )}px`;
    }
  }, [textArea.current, props.value]);

  return (
    <div
      className={`form-field text-area-form-field ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <textarea
        ref={textArea}
        style={{
          resize: resizeOptions[
            props.readOnly || props.disabled || !props.attributes
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
