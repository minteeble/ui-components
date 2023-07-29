import React, { useEffect, useRef, useState } from "react";
import { MultiSelectFormFieldProps } from "./MultiSelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { internalValue } from "../../FormV2/FormV2.types";

export const MultiSelectFormField = (props: MultiSelectFormFieldProps) => {
  const options: string[] | internalValue[] = props.attributes?.options || [];

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
    setSelectedValues(props.value);
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
                    {props.attributes &&
                    props.attributes.options &&
                    // @ts-ignore
                    props.attributes.options.find((option: any) => {
                      return (
                        typeof option !== "string" && option.value === selection
                      );
                    })
                      ? // @ts-ignore
                        props.attributes.options.find((option: any) => {
                          return (
                            typeof option !== "string" &&
                            option.value === selection
                          );
                        }).text
                      : selection}
                    <div
                      className="remove"
                      onClick={() => {
                        setSelectedValues((current) => {
                          current.splice(current.indexOf(selection), 1);
                          props.setValue(current);
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
                  setSelectedValues((current) => {
                    current.push(input.trim().replaceAll(",", ""));
                    setInput("");
                    props.setValue(current);
                    return [...current];
                  });
                }
                if (e.key === "Backspace" && input.length === 0) {
                  setInput(selectedValues[selectedValues.length - 1]);
                  setSelectedValues((current) => {
                    current.pop();
                    props.setValue(current);
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
                  typeof option === "string"
                    ? selectedValues.includes(option)
                      ? "selected"
                      : ""
                    : selectedValues.includes(option.value)
                }`}
                key={i}
                onClick={() => {
                  if (typeof option === "string") {
                    if (selectedValues.includes(option)) {
                      setSelectedValues((current) => {
                        current.splice(current.indexOf(option), 1);
                        props.setValue(current);
                        return [...current];
                      });
                    } else {
                      setSelectedValues((current) => {
                        current.push(option);
                        props.setValue(current);
                        return [...current];
                      });
                    }
                  } else {
                    if (selectedValues.includes(option.value)) {
                      setSelectedValues((current) => {
                        current.splice(current.indexOf(option.value), 1);
                        props.setValue(current);

                        return [...current];
                      });
                    } else {
                      setSelectedValues((current) => {
                        current.push(option.value);
                        props.setValue(current);

                        return [...current];
                      });
                    }
                  }
                  setIsOpen(false);
                }}
              >
                {typeof option === "string" ? option : option.text}
                {selectedValues.includes(
                  typeof option === "string" ? option : option.value
                ) && <FontAwesomeIcon icon={faCheck} />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
