import React, { useEffect, useRef, useState } from "react";
import { SelectFormFieldProps } from "./SelectFormField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { internalValue } from "../../FormV2/FormV2.types";

export const SelectFormField = (props: SelectFormFieldProps) => {
  const dropUp = props.attributes?.dropUp || false;

  const [options, setOptions] = useState<Array<string | internalValue>>(
    props.attributes?.options || []
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [currentOption, setCurrentOption] = useState<string | null>(
    props.value && options.length > 0
      ? // @ts-ignore
        options.find(
          (item: any) =>
            typeof item !== "string" && item.value === props.value.value
        ) || props.value
      : null
  );

  useEffect(() => {
    setCurrentOption(
      props.value && options.length > 0
        ? // @ts-ignore
          options.find(
            (item: any) =>
              typeof item !== "string" && item.value === props.value.value
          ) || props.value
        : null
    );
  }, [props.value]);

  useEffect(() => {
    setOptions(props.attributes?.options || []);
  }, [props.attributes?.options]);

  const field = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let text;
    if (props.value && options.length > 0) {
      if (
        typeof props.value !== "string" &&
        props.value.text === "" &&
        props.value.value !== ""
      ) {
        // @ts-ignore
        text = options.find(
          (item: any) =>
            typeof item !== "string" && item.value === props.value.value
          // @ts-ignore
        ).text;
      } else {
        text =
          // @ts-ignore
          options.find((val: any) => {
            return typeof val === "string" && val === props.value;
          }) ||
          // @ts-ignore
          options.find((val: any) => {
            return (
              typeof val !== "string" &&
              (val.value === props.value || val.value === props.value.value)
            );
            // @ts-ignore
          }).text;
      }
      if (typeof text !== "undefined") setCurrentOption(text);
    }
  }, [props.value, options]);

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
        {!!options.find(
          (val) =>
            typeof val !== "string" && val.text === currentOption && val.icon
        ) && (
          <div className="icon">
            {typeof options.find(
              (val) => typeof val !== "string" && val.text === currentOption
              // @ts-ignore
            )!.icon === "string" ? (
              <img
                className="icon-image"
                src={
                  options.find(
                    (val) =>
                      typeof val !== "string" && val.text === currentOption
                    // @ts-ignore
                  )!.icon
                }
              />
            ) : (
              <>
                {
                  options.find(
                    (val) =>
                      typeof val !== "string" && val.text === currentOption
                    // @ts-ignore
                  )!.icon
                }
              </>
            )}
          </div>
        )}
        {currentOption
          ? currentOption
          : props.readOnly
          ? "Unset"
          : props.placeholder || "Unset"}
        <FontAwesomeIcon icon={faChevronDown} className="arrow" />
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
                {typeof option !== "string" && option.icon && (
                  <div className="icon">
                    {typeof option.icon === "string" ? (
                      <img className="icon-image" src={option.icon} />
                    ) : (
                      <>{option.icon}</>
                    )}
                  </div>
                )}
                {typeof option === "string" ? option : option.text}
                {((typeof option === "string" && currentOption === option) ||
                  (typeof option === "object" &&
                    currentOption === option.text)) && (
                  <FontAwesomeIcon icon={faCheck} className="check" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
