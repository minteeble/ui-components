import React from "react";
import { BooleanCheckboxFormFieldProps } from "./BooleanCheckboxFormField.types";

const BooleanCheckboxFormField = (props: BooleanCheckboxFormFieldProps) => {
  return (
    <div className="form-field boolean-checkbox-form-field">
      <fieldset>
        <>
          <div
            className={`checkbox-wrapper ${props.value ? "active" : ""}`}
            onClick={() => {
              props.setValue(!props.value);
            }}
          >
            <input
              type="checkbox"
              value={props.value}
              checked={props.value}
              onChange={(e) => {
                props.setValue(!props.value);
              }}
            />
            <label className="montserrat checkbox-label">
              {props.attributes && props.attributes.checkboxText
                ? props.attributes.checkboxText
                : ""}
            </label>
          </div>
        </>
      </fieldset>
    </div>
  );
};

export default BooleanCheckboxFormField;
