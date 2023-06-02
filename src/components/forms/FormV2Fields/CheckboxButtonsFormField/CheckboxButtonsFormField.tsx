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
          let name = optionToInputName(
            typeof option === "string" ? option : option.text
          );

          return (
            <>
              <div
                className={`checkbox-wrapper ${
                  (props.value || []).includes(
                    typeof option === "string" ? option : option.value
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  if (
                    (props.value || []).includes(
                      typeof option === "string" ? option : option.value
                    )
                  ) {
                    let index = props.value.indexOf(
                      typeof option === "string" ? option : option.value
                    );
                    if (index !== -1) {
                      let valueCopy = [...props.value];
                      valueCopy.splice(index, 1);
                      props.setValue(valueCopy);
                    } else {
                      console.log("Could not find option ", option);
                    }
                  } else {
                    props.setValue([
                      ...props.value,
                      typeof option === "string" ? option : option.value,
                    ]);
                  }
                }}
              >
                <input
                  type="checkbox"
                  name={name}
                  key={name}
                  value={typeof option === "string" ? option : option.value}
                  checked={(props.value || []).includes(
                    typeof option === "string" ? option : option.value
                  )}
                  onChange={(e) => {
                    if (!e.target.checked) {
                      let index = props.value.indexOf(
                        typeof option === "string" ? option : option.value
                      );
                      if (index !== -1) {
                        let valueCopy = [...props.value];
                        valueCopy.splice(index, 1);
                        props.setValue(valueCopy);
                      } else {
                        console.log("Could not find option ", option);
                      }
                    } else {
                      props.setValue([
                        ...props.value,
                        typeof option === "string" ? option : option.value,
                      ]);
                    }
                  }}
                />
                <label className="montserrat checkbox-label" htmlFor={name}>
                  {typeof option === "string" ? option : option.text}
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
