import React, { useEffect, useState } from "react";
import { SelectFormFieldProps } from "./SelectFormField.types";

export const SelectFormField = (props: SelectFormFieldProps) => {
  const options: string[] = props.attributes.options || [];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<number | null>(
    parseInt(props.value) || null
  );

  useEffect(() => {
    if (currentOption) {
      props.setValue(currentOption);
    }
  }, [currentOption]);

  return (
    <div className="form-field select-form-field">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`montserrat select-field ${currentOption ? "" : "null"}`}
        // onChange={(e) => {
        //   props.setValue(e.target.value);
        // }}
      >
        {currentOption ? options[currentOption] : props.placeholder || ""}
      </div>
      <div className={`options ${isOpen}`}>
        {options.map((option, i) => {
          return (
            <div
              className="option"
              key={i}
              onClick={() => {
                setCurrentOption(i);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
};
