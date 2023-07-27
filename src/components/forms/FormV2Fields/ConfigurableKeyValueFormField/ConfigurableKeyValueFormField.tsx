import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  ConfigurableKeyValueFormFieldProps,
  ConfigurableKeyValueSubField,
} from "./ConfigurableKeyValueFormField.types";

const ConfigurableKeyValueFormField = (
  props: ConfigurableKeyValueFormFieldProps
) => {
  return (
    <>
      <div
        className={`configurable-key-value-form-field form-field ${
          props.disabled ? "disabled" : ""
        }`}
      >
        {props.attributes.header && props.value.length > 0 && (
          <div className="header">
            {props.attributes.header.map((col) => {
              return <div className="col-name montserrat">{col}</div>;
            })}
          </div>
        )}
        {props.value.length > 0 ? (
          props.value.map((row: any, i: number) => {
            return (
              <>
                <div className="item">
                  {row.map((field: any, j: number) => {
                    const SubComponent =
                      props.attributes.subFields[j].formFieldComponent;

                    return (
                      <SubComponent
                        key={field.key}
                        value={field.value}
                        label=""
                        placeholder={
                          props.attributes.subFields[j].placeholder || ""
                        }
                        setValue={(newVal: any) => {
                          const newValues = props.value;

                          newValues[i][j].value = newVal;

                          props.setValue(newValues);
                        }}
                        formData={{ fields: [] }}
                        attributes={
                          props.attributes.subFields[j].attributes || {}
                        }
                      />
                    );
                  })}
                  <div
                    className="remove"
                    onClick={() => {
                      const newValue = props.value;
                      newValue.splice(i, 1);

                      props.setValue(newValue);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <span className="no-items">no items</span>
        )}
        <div
          className="add-row"
          onClick={() => {
            const newValue = props.value;
            newValue.push(
              props.attributes.subFields.map((field) => ({
                key: field.key,
                value: "",
              }))
            );

            props.setValue(newValue);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </>
  );
};

export default ConfigurableKeyValueFormField;
