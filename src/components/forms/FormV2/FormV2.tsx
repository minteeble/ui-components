/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import Button, { ButtonActionType } from "../Button";
import { ReadOnlyField } from "../FormV2Fields";
import { FormFieldState, FormInjectedData, FormV2Props } from "./FormV2.types";
import React, { useEffect, useState } from "react";

/**
 * Form V2 component
 *
 * @param props FormV2 props object
 * @returns FormV2 React component
 */
export const FormV2 = (props: FormV2Props) => {
  let formLogic = props.formLogic;

  let formData: FormInjectedData = {
    fields: formLogic.fields,
  };

  useEffect(() => {
    if (typeof props.onSubmit !== "undefined") {
      console.log("Setting new onSubmit");
      formLogic.onSubmit(props.onSubmit);
    }
    console.log("here");
  }, [props.onSubmit]);

  // Creates a list of field components ready to be rendered
  let cachedReadOnly: FormFieldState[] = [];
  let fieldsComponentsList: JSX.Element[] = [];
  formLogic.fields
    .filter((fieldInfo) => {
      if (typeof fieldInfo.active === "boolean") return fieldInfo.active;

      if (fieldInfo.active)
        return fieldInfo.active(fieldInfo.value, formData.fields);

      return true;
    })
    .forEach((fieldInfo) => {
      if (fieldInfo.fieldComponent) {
        // Mapping field component into a React component compliant variable (it should be capitalized)
        const FieldComponent = fieldInfo.fieldComponent;

        let fieldComponent = (
          <FieldComponent
            value={fieldInfo.value}
            setValue={(newValue: any) => {
              formLogic.setValue(fieldInfo.key, newValue);
            }}
            error={fieldInfo.error}
            key={fieldInfo.key}
            placeholder={fieldInfo.placeholder}
            label={fieldInfo.label}
            attributes={fieldInfo.attributes}
            formData={formData}
            readOnly={fieldInfo.readOnly || false}
            disabled={fieldInfo.disabled || false}
          />
        );

        if (fieldInfo.enableCustomRendering) {
          fieldsComponentsList.push(fieldComponent);
        } else if (fieldInfo.readOnly) {
          cachedReadOnly.push(fieldInfo);
        } else {
          fieldsComponentsList.push(
            <>
              {cachedReadOnly.length > 0 && (
                <div className="field-wrapper readonly">
                  {cachedReadOnly.map((field, i) => {
                    return (
                      <div className="read-only-wrapper" key={i}>
                        <ReadOnlyField
                          copyable={field.copyable}
                          label={field.label}
                          value={field.value}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </>,
            <div className="field-wrapper">
              <div className="field-info">
                <label htmlFor={fieldInfo.key} className="field-label">
                  {fieldInfo.label}
                </label>
                <p className="field-error">{fieldInfo.error}</p>
              </div>
              {fieldComponent}
            </div>
          );
          cachedReadOnly = [];
        }
      }
    });

  if (cachedReadOnly.length > 0) {
    fieldsComponentsList.push(
      <div className="field-wrapper readonly">
        {cachedReadOnly.map((field, i) => {
          return (
            <div className="read-only-wrapper" key={i}>
              <ReadOnlyField
                copyable={field.copyable}
                label={field.label}
                value={field.value}
              />
            </div>
          );
        })}
      </div>
    );
    cachedReadOnly = [];
  }

  return (
    <form noValidate className="form-v2">
      {fieldsComponentsList}
      {props.formLogic.isSubmitEnabled && (
        <Button
          actionType={ButtonActionType.Button}
          onClick={(e) => {
            e?.preventDefault();
            props.formLogic.submit();
          }}
          text={props.formLogic.submitButtonText}
        />
      )}
    </form>
  );
};
