import React, { useEffect, useRef, useState } from "react";
import { MultiSelectFormFieldProps } from "./MultiSelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ContentEditable from "react-contenteditable";

export const MultiSelectFormField = (props: MultiSelectFormFieldProps) => {
  const options: string[] = props.attributes.options || [];

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useState<string[]>(
    props.value && props.value.length > 0 ? props.value : [""]
  );
  const [placeholder, setPlaceholder] = useState<string>(
    props.placeholder || "Unset"
  );

  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("VALUES", selectedValues);
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

  const handleOnChange = (e: any) => {
    const text = e.target.textContent || e.target.value || "";
    if (text.length > 0) {
      setPlaceholder("");
    } else {
      setPlaceholder(props.placeholder || "Unset");
    }
    setSelectedValues(
      text.replace(/,$/, "").split(",").length > 0
        ? text.replace(/,$/, "").split(",")
        : [text]
    );
  };

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
          onInput={(e) => {
            handleOnChange(e);
          }}
          contentEditable={true}
          suppressContentEditableWarning={true}
          placeholder={placeholder}
        >
          {/* {selectedValues.length > 0
            ? selectedValues.map((selection, i) => {
                if (i === selectedValues.length - 1) return <>{selection}</>;
                return (
                  <div className="selection-box" key={i}>
                    {selection}
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                  );
                })
              : ""} */}
          <div className="selection-box">
            selection
            <FontAwesomeIcon icon={faXmark} />
          </div>
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
                      if (current.length === 1) {
                        current = [];
                      } else {
                        current = current.splice(
                          current.indexOf(option) - 1,
                          1
                        );
                      }
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
