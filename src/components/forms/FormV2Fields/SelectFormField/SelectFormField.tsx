import React, { useEffect, useRef, useState } from "react";
import { SelectFormFieldProps } from "./SelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const SelectFormField = (props: SelectFormFieldProps) => {
  const options: string[] = props.attributes.options || [];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string | null>(
    props.value ? props.value : null
  );

  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentOption) {
      props.setValue(currentOption);
    }
  }, [currentOption]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (field.current && !field.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [field]);

  return (
    <div
      ref={field}
      className={`form-field select-form-field ${isOpen ? "open" : ""}`}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`montserrat select-field ${currentOption ? "" : "null"}`}
        // onChange={(e) => {
        //   props.setValue(e.target.value);
        // }}
      >
        {currentOption ? currentOption : props.placeholder || ""}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div
        className={`options`}
        style={{
          height: isOpen ? `${3 * options.length + 1}rem` : "0rem",
        }}
      >
        {options.map((option, i) => {
          return (
            <div
              className={`option ${currentOption === option ? "selected" : ""}`}
              key={i}
              onClick={() => {
                setCurrentOption(option);
                setIsOpen(false);
              }}
            >
              {option}
              {currentOption === option && <FontAwesomeIcon icon={faCheck} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
