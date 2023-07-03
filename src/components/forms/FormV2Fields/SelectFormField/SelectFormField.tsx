import React, { useEffect, useRef, useState } from "react";
import { SelectFormFieldProps } from "./SelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { internalValue } from "../../FormV2/FormV2.types";

export const SelectFormField = (props: SelectFormFieldProps) => {
  const options: string[] | internalValue[] = props.attributes?.options || [];

  const dropUp = props.attributes?.dropUp || false;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [defaultVal, setDefaultVal] = useState<internalValue | null>(null);

  const [currentOption, setCurrentOption] = useState<string | null>(
    props.value && options ? (defaultVal ? defaultVal.text : props.value) : null
  );

  useEffect(() => {
    if (options.length > 0 && props.value) {
      // @ts-ignore
      const res = options.find(
        // @ts-ignore
        (item) => {
          return typeof item !== "string" && item.value == props.value;
        }
      );

      if (res) {
        setDefaultVal(res);
      }
    }
  }, [options, props.value]);

  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.value) {
      let text =
        // @ts-ignore
        options.find((val: any) => {
          return typeof val === "string" && val === props.value;
        }) ||
        // @ts-ignore
        options.find((val: any) => {
          return typeof val !== "string" && val.value === props.value;
        }).text;
      setCurrentOption(text);
    }
  }, [props.value]);

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
                  (typeof option === "string" && currentOption === option) ||
                  (typeof option === "object" && currentOption === option.text)
                    ? "selected"
                    : ""
                }`}
                key={i}
                onClick={() => {
                  props.setValue(
                    typeof option === "string" ? option : option.value
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
