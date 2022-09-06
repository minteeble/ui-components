import React from "react";
import { SelectProps } from "./Select.types";
import ComboBox from "react-responsive-combo-box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select = (props: SelectProps) => {
  return (
    <div className="select-wrapper">
      {props.label && <label className="select-label">{props.label}</label>}
      <div className="select">
        <ComboBox
          options={props.options}
          // defaultValue={props.value }
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
