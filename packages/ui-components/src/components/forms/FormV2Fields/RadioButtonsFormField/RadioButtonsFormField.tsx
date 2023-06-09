import React from "react";
import { RadioButtonsFormFieldProps } from "./RadioButtonsFormField.types";
import { internalValue } from "../../FormV2/FormV2.types";

export const RadioButtonsFormField = (props: RadioButtonsFormFieldProps) => {
  const options: string[] | internalValue[] = props.attributes?.options || [];

  const optionToInputName = (optionString: string | internalValue) => {
    return (typeof optionString === "string" ? optionString : optionString.text)
      .replaceAll(/\s/g, "-")
      .toLowerCase();
  };

  return (
    <div
      className={`form-field radio-buttons-form-field ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <fieldset>
        {options.map((option) => {
          let name = optionToInputName(option);

          return (
            <div
              className={`radio-wrapper ${
                props.value === option ? "active" : ""
              }`}
              onClick={() => {
                if (typeof option === "string") {
                  props.setValue(option);
                } else {
                  props.setValue(option.value);
                }
              }}
            >
              <input
                type="radio"
                name={name}
                key={name}
                value={typeof option === "string" ? option : option.text}
                checked={
                  (typeof option === "string" && props.value === option) ||
                  (typeof option !== "string" && props.value === option.value)
                }
                onChange={(e) => {
                  props.setValue(
                    typeof option === "string" ? option : option.value
                  );
                }}
              />
              <label className="montserrat radio-label" htmlFor={name}>
                {typeof option === "string" ? option : option.text}
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
