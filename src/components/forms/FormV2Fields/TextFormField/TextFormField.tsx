import React from "react";
import { TextFormFieldProps } from "./TextFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export const TextFormField = (props: TextFormFieldProps) => {
  return (
    <div
      className={`form-field text-form-field ${
        props.disabled ? "disabled" : ""
      }`}
    >
      {/* <FontAwesomeIcon icon={faCopy} /> */}
      {props.readOnly ? (
        <p className="value montserrat">{props.value}</p>
      ) : (
        <input
          className="montserrat"
          value={props.value}
          onChange={(e) => {
            props.setValue(e.target.value);
          }}
          placeholder={props.placeholder || ""}
        />
      )}
    </div>
  );
};
