import React from "react";
import { SelectProps } from "./Select.types";
import ComboBox from "react-responsive-combo-box";

const Select = (props: SelectProps) => {
  const data = [
    "America",
    "India",
    "Australia",
    "Argentina",
    "Ireland",
    "Indonesia",
    "Iceland",
    "Japan",
  ];
  return (
    <div className="select">
      <ComboBox
        options={data}
        enableAutocomplete
        renderOptions={(option) => (
          <div className="comboBoxOption">{option}</div>
        )}
      />
    </div>
  );
};

export default Select;
