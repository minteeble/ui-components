import React from "react";
import { CheckboxButtonsFormFieldProps } from "./CheckboxButtonsFormField.types";

export const CheckboxButtonsFormField = (
  props: CheckboxButtonsFormFieldProps
) => {
  let options = props.attributes?.options || [];

  const optionToInputName = (optionString: string) => {
    return optionString.replaceAll(/\s/g, "-").toLowerCase();
  };

  return (
    <div
      className={`form-field checkbox-buttons-form-field ${
        props.disabled ? "disabled" : ""
      }`}
    >
      <fieldset>
        {options.map((option) => {
          let name = optionToInputName(option);

          return (
            <>
              <div
                className={`checkbox-wrapper ${
                  (props.value || []).includes(option) ? "active" : ""
                }`}
                onClick={() => {
                  if ((props.value || []).includes(option)) {
                    let index = props.value.indexOf(option);
                    if (index !== -1) {
                      let valueCopy = [...props.value];
                      valueCopy.splice(index, 1);
                      props.setValue(valueCopy);
                    } else {
                      console.log("Could not find option ", option);
                    }
                  } else {
                    props.setValue([...props.value, option]);
                  }
                }}
              >
                <input
                  type="checkbox"
                  name={name}
                  key={name}
                  value={option}
                  checked={(props.value || []).includes(option)}
                  onChange={(e) => {
                    if (!e.target.checked) {
                      let index = props.value.indexOf(option);
                      if (index !== -1) {
                        let valueCopy = [...props.value];
                        valueCopy.splice(index, 1);
                        props.setValue(valueCopy);
                      } else {
                        console.log("Could not find option ", option);
                      }
                    } else {
                      props.setValue([...props.value, option]);
                    }
                  }}
                />
                <label className="montserrat checkbox-label" htmlFor={name}>
                  {option}
                </label>
              </div>
            </>
          );
        })}
      </fieldset>
      {/* <input
        className="montserrat"
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
        placeholder={props.placeholder || ""}
      /> */}
    </div>
  );
};
