import React from "react";
import { SelectProps } from "./Select.types";
import ComboBox from "react-responsive-combo-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = (props: SelectProps) => {
  return (
    <div className="select-wrapper ">
      <div className="input-header">
        {props.label && <label className="select-label">{props.label}</label>}
        {props.errorMessage && !props.readonlyField && (
          <span className="error">{props.errorMessage}</span>
        )}
      </div>
      <div className={`select ${props.readonlyField ? "disabled" : ""}`}>
        <ComboBox
          options={props.options}
          // defaultValue={props.value}
          placeholder={props.placeHolder || ""}
          editable={false}
          onSelect={(newValue) => {
            props.onValueChange(newValue);
          }}
        />
        <FontAwesomeIcon icon={faCaretDown} className="select-icon" />
      </div>
    </div>
  );
};

export default Select;
