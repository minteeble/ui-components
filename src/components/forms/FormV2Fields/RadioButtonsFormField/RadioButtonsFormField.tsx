import React from "react";
import { RadioButtonsFormFieldProps } from "./RadioButtonsFormField.types";

export const RadioButtonsFormField = (props: RadioButtonsFormFieldProps) => {
  let options = props.attributes?.options || [];

  const optionToInputName = (optionString: string) => {
    return optionString.replaceAll(/\s/g, "-").toLowerCase();
  };

  return (
    <div className="form-field radio-buttons-form-field">
      <fieldset>
        {options.map((option) => {
          let name = optionToInputName(option);

          return (
            <div
              className={`radio-wrapper ${
                props.value === option ? "active" : ""
              }`}
              onClick={() => {
                props.setValue(option);
              }}
            >
              <input
                type="radio"
                name={name}
                key={name}
                value={option}
                checked={props.value === option}
                onChange={(e) => {
                  props.setValue(option);
                }}
              />
              <label className="montserrat radio-label" htmlFor={name}>
                {option}
              </label>
            </div>
          );
        })}
      </fieldset>
      {/* <input
        className="montserrat"
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        placeholder={props.placeholder || ""}
      /> */}
    </div>
  );
};
