import React, { useEffect, useRef, useState } from "react";
import { SelectFormFieldProps } from "./SelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { internalValue } from "../../FormV2/FormV2.types";

export const SelectFormField = (props: SelectFormFieldProps) => {
  const options: string[] | internalValue[] = props.attributes.options || [];

  const dropUp = props.attributes.dropUp || false;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<string | null>(
    props.value ? props.value : null
  );

  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentOption) {
      let value =
        // @ts-ignore
        options.find((val: any) => {
          return typeof val === "string" && val === currentOption;
        }) ||
        // @ts-ignore
        options.find((val: any) => {
          return typeof val !== "string" && val.text === currentOption;
        }).value;
      props.setValue(value);
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
      className={`form-field select-form-field ${isOpen ? "open" : ""} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`montserrat select-field ${currentOption ? "" : "null"}`}
      >
        {currentOption
          ? currentOption
          : props.readOnly
          ? "Unset"
          : props.placeholder || "Unset"}
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {!props.disabled && !props.readOnly && options.length > 0 && (
        <div
          className={`options`}
          style={{
            height: isOpen ? `${3 * options.length + 1}rem` : "0rem",
            maxHeight: `${3 * 5 + 1}rem`,
            overflowY: 3 * options.length + 1 > 3 * 5 + 1 ? "scroll" : "hidden",
            top: dropUp ? "uset" : "100%",
            bottom: !dropUp ? "uset" : "100%",
          }}
        >
          {options.map((option, i) => {
            return (
              <div
                className={`montserrat option ${
                  currentOption === option ? "selected" : ""
                }`}
                key={i}
                onClick={() => {
                  setCurrentOption(
                    typeof option === "string" ? option : option.text
                  );
                  setIsOpen(false);
                }}
              >
                {typeof option === "string" ? option : option.text}
                {((typeof option === "string" && currentOption === option) ||
                  (typeof option === "object" &&
                    currentOption === option.text)) && (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
