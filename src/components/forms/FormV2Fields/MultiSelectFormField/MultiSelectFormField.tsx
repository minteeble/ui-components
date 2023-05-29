import React, { useEffect, useRef, useState } from "react";
import { MultiSelectFormFieldProps } from "./MultiSelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const MultiSelectFormField = (props: MultiSelectFormFieldProps) => {
  const options: string[] = props.attributes?.options || [];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    props.value && props.value.length > 0 ? props.value : []
  );
  const [placeholder, setPlaceholder] = useState<string>(
    props.placeholder || "Unset"
  );

  const [input, setInput] = useState<string>("");

  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    props.setValue(selectedValues);
  }, [selectedValues]);

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

  useEffect(() => {
    if (selectedValues.length > 0) {
      setPlaceholder("Add...");
    } else {
      setPlaceholder(props.placeholder || "Unset");
    }
  }, [selectedValues]);

  return (
    <div
      ref={field}
      className={`form-field multi-select-form-field ${isOpen ? "open" : ""} ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <div className="wrapper">
        {options.length > 0 && (
          <FontAwesomeIcon
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="open-option"
            icon={faChevronDown}
          />
        )}
        <div
          className={`montserrat select-field ${
            selectedValues.length > 0 ? "" : "null"
          }`}
          onClick={() => {
            if (!props.attributes?.customSelectEnabled) {
              setIsOpen(!isOpen);
            }
          }}
        >
          {selectedValues.length === 0 &&
            !props.attributes?.customSelectEnabled &&
            (props.placeholder || "Unset")}
          {selectedValues.length > 0
            ? selectedValues.map((selection, i) => {
                return (
                  <div className="selection-box" key={i}>
                    {selection}
                    <div
                      className="remove"
                      onClick={() => {
                        setSelectedValues((current) => {
                          current.splice(current.indexOf(selection), 1);

                          return [...current];
                        });
                      }}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                  </div>
                );
              })
            : ""}
          {props.attributes && props.attributes.customSelectEnabled && (
            <input
              type="text"
              className="selection-input montserrat"
              placeholder={placeholder}
              value={input}
              onChange={(e) => {
                setInput(e.target.value.replaceAll(",", ""));
              }}
              onKeyDown={(e) => {
                if (e.key === ",") {
                  selectedValues.push(input.trim().replaceAll(",", ""));
                  setInput("");
                }
                if (e.key === "Backspace" && input.length === 0) {
                  setInput(selectedValues[selectedValues.length - 1]);
                  setSelectedValues((current) => {
                    current.pop();
                    return [...current];
                  });
                }
              }}
            />
          )}
        </div>
      </div>
      {!props.disabled && !props.readOnly && options.length > 0 && (
        <div
          className={`options`}
          style={{
            height: isOpen ? `${3 * options.length + 1}rem` : "0rem",
            maxHeight: `${3 * 5 + 1}rem`,
            overflowY: 3 * options.length + 1 > 3 * 5 + 1 ? "scroll" : "hidden",
          }}
        >
          {options.map((option, i) => {
            return (
              <div
                className={`montserrat option ${
                  selectedValues.includes(option) ? "selected" : ""
                }`}
                key={i}
                onClick={() => {
                  if (selectedValues.includes(option)) {
                    setSelectedValues((current) => {
                      current.splice(current.indexOf(option), 1);

                      return [...current];
                    });
                  } else {
                    setSelectedValues((current) => {
                      current.push(option);

                      return [...current];
                    });
                  }
                  setIsOpen(false);
                }}
              >
                {option}
                {selectedValues.includes(option) && (
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
