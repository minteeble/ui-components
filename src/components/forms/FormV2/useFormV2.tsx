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
import { FormFieldState, FormLogic, UseFormV2Props } from "./FormV2.types";
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

  const addField = (newField: FormFieldState): void => {
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
    let field = fieldsInfo.find((field) => field.key === key);

    if (!field) {
      throw new Error(`Error or removing field.`);
    }

    let fieldIndex = fieldsInfo.indexOf(field);

    setFieldsInfo((oldFields) => {
      let hold = [...oldFields];

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
    internalOnValueChange();
  }, [fieldsInfo]);

  const setValue = (key: string, newValue: any): void => {
    setFieldsInfo((oldFields) => {
      let field = fieldsInfo.find((field) => field.key === key);
      if (field) {
        let validationResult: boolean | string = true;

        if (field.validate) {
          validationResult = field.validate(newValue);
        }

        if (validationResult === true) {
          if (field.transform) {
            field.value = field.transform(newValue);
          } else {
            field.value = newValue;
          }

          internalOnKeyValueChanged(field.key, field);
          return [...oldFields];
        } else if (typeof validationResult === "string") {
          let errorMessage =
            typeof validationResult === "string"
              ? validationResult
              : "Invalid value";

          console.log("Validation error:", errorMessage);
        }
      } else throw new Error(`Error or removing field.`);

      return oldFields;
    });
  };

  return {
    addField,
    removeField,
    setValue,
    fields: fieldsInfo,
    onValueChange,
    onFieldValueChange,
  };
};
