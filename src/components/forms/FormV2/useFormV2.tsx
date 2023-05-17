/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { useEffect, useState } from "react";
import {
  FormFieldState,
  FormFieldUpdateModel,
  FormInjectedData,
  FormLogic,
  UseFormV2Props,
} from "./FormV2.types";
import lodash from "lodash";
import { FieldState } from "../Form/Form";

/**
 * Custom hook for handling Form V2 logic
 *
 * @param props Form V2 hook props
 * @returns Form logic
 */
export const useFormV2 = (props: UseFormV2Props): FormLogic => {
  // States
  const [fieldsInfo, setFieldsInfo] = useState<Array<FormFieldState>>([]);
  const [onValueChangeCallback, setOnValueChangeCallback] = useState<
    (fields: Array<FormFieldState>) => void
  >(() => {});
  const [onKeyValueChangeCallback, setOnKeyValueChangeCallback] = useState<{
    [key: string]: (field: FormFieldState) => void;
  }>({});
  const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(true);
  const [submitButtonText, setSubmitButtonText] = useState<string>("Submit");
  const [onSubmit, setOnSubmitFunction] = useState<
    (formData: FormInjectedData) => void
  >(() => {});

  const addField = (newField: FormFieldState): void => {
    // Checks if field exists
    let fieldAlreadyPresent = fieldsInfo.find(
      (field) => field.key === newField.key
    );

    if (fieldAlreadyPresent)
      throw new Error("Error on adding new field: Field key already present.");

    setFieldsInfo((oldFields) => {
      return [...oldFields, newField];
    });
  };

  const removeField = (key: string): void => {
    // Checks if field exists
    let field = fieldsInfo.find((field) => field.key === key);

    if (!field) {
      throw new Error(`Error or removing field.`);
    }

    let fieldIndex = fieldsInfo.indexOf(field);

    setFieldsInfo((oldFields) => {
      let hold = [...oldFields];

      // Removes found element
      hold.splice(fieldIndex, 1);

      return hold;
    });
  };

  const internalOnValueChange = () => {
    if (onValueChangeCallback) onValueChangeCallback(fieldsInfo);
  };

  const onValueChange = (
    callback: (fields: Array<FormFieldState>) => void
  ): void => {
    setOnValueChangeCallback(callback);
  };

  const internalOnKeyValueChanged = (key: string, field: FormFieldState) => {
    if (onKeyValueChangeCallback[key]) {
      onKeyValueChangeCallback[key](field);
    }
  };

  const onFieldValueChange = (
    key: string,
    callback: (field: FormFieldState) => void
  ): void => {
    setOnKeyValueChangeCallback((old) => {
      old[key] = callback;
      return { ...old };
    });
  };

  useEffect(() => {
    // Fires a `onValueChange` event, every time the fieldsInfo list changes
    internalOnValueChange();
    console.log("Updated fields", fieldsInfo);
  }, [fieldsInfo]);

  const updateField = (
    key: string,
    updateModel: FormFieldUpdateModel
  ): void => {
    setFieldsInfo((oldFields) => {
      // Checks if field exists
      let field = fieldsInfo.find((field) => field.key === key);

      // console.log("Fields:", fieldsInfo);

      if (field) {
        if (field.active !== updateModel.active) {
          field.active = updateModel.active ?? field.active;
        }

        if (field.label !== updateModel.label) {
          field.label = updateModel.label ?? field.label;
        }

        if (field.placeholder !== updateModel.placeholder) {
          field.placeholder = updateModel.placeholder ?? field.placeholder;
        }

        if (field.attributes !== updateModel.attributes) {
          field.attributes = updateModel.attributes ?? field.attributes;
        }

        if (field.readOnly !== updateModel.readOnly) {
          field.readOnly = updateModel.readOnly ?? field.readOnly;
        }

        return [...oldFields];
      } else throw new Error(`Error or updating field "${key}"`);
    });
  };

  const setValue = (key: string, newValue: any): void => {
    setFieldsInfo((oldFields) => {
      // Checks if field exists
      let field = fieldsInfo.find((field) => field.key === key);

      if (field) {
        let validationResult: boolean | string = true;

        // If present, run validation
        if (field.validate) {
          validationResult = field.validate(newValue);
        }

        if (validationResult === true) {
          // Value is valid

          if (field.transform) {
            // If transform predicate is set, sanitizes the value through it
            field.value = field.transform(newValue);
          } else {
            field.value = newValue;
          }

          // Fires onChaneg event for the updated field
          internalOnKeyValueChanged(field.key, field);

          return [...oldFields];
        } else if (typeof validationResult === "string") {
          // Value is not valid.

          // Determining if the default error message or a custom one has to be used
          let errorMessage =
            typeof validationResult === "string"
              ? validationResult
              : "Invalid value";

          console.log("Validation error:", errorMessage);
        }
      } else
        throw new Error(`Error or setting new value field for key "${key}"`);

      return oldFields;
    });
  };

  const enableSubmit = (newValue: boolean) => {
    setIsSubmitEnabled(newValue);
  };

  const setSubmitText = (newText: string) => {
    setSubmitButtonText(newText);
  };

  const setOnSubmit = (newFunction: (formData: FormInjectedData) => void) => {
    setOnSubmitFunction(newFunction);
  };

  // Returns a FormLogic object
  return {
    addField,
    removeField,
    setValue,
    updateField,
    fields: fieldsInfo,
    onValueChange,
    onFieldValueChange,
    isSubmitEnabled,
    enableSubmit,
    submitButtonText,
    setSubmitText,
    onSubmit,
    setOnSubmit,
  };
};
