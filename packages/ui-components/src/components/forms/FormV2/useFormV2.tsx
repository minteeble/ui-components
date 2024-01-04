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
  FormOnSubmitDataModel,
  SubmitButtonAlignment,
  UseFormV2Props,
} from "./FormV2.types";
import lodash from "lodash";
import { FieldState } from "../Form/Form";

class FormLogicHandler {
  public onSubmitCallback: (
    formData: FormOnSubmitDataModel
  ) => void | Promise<void>;

  constructor() {
    this.onSubmitCallback = () => {};
  }

  public setOnSubmitCallback(
    callback: (formData: FormOnSubmitDataModel) => void
  ): void {
    this.onSubmitCallback = callback;
  }
}

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
  const [logicHandler, setLogicHandler] = useState<FormLogicHandler>(
    new FormLogicHandler()
  );
  const [submitAlignment, setSubmitAlignment] = useState<SubmitButtonAlignment>(
    SubmitButtonAlignment.Center
  );
  const [formInitialized, setForminitialized] = useState<boolean>(false);

  const fieldValidation = (field: FormFieldState) => {
    if (field) {
      field.error = "";

      let validationResult: boolean | string = true;

      console.log(field.required, field.key);
      if (field.required && isEmpty(field.value)) {
        validationResult = "Field is required";
        console.log(field.key, "is empty");
      }
      // If present, run validation
      else if (field.validate) {
        validationResult = field.validate(field.value);
      }

      if (validationResult === true || field.displayInvalidValue) {
        // Value is valid

        if (field.transform) {
          // If transform predicate is set, sanitizes the value through it
          field.value = field.transform(field.value);
        }

        // Fires onChange event for the updated field
        internalOnKeyValueChanged(field.key, field);

        if (validationResult !== true) {
          let errorMessage =
            typeof validationResult === "string"
              ? validationResult
              : "Invalid value";

          field.error = errorMessage;
        }
      } else {
        // Value is not valid.
        // Determining if the default error message or a custom one has to be used
        let errorMessage =
          typeof validationResult === "string"
            ? validationResult
            : "Invalid value";

        field.error = errorMessage;
        console.log("Validation error:", errorMessage);
      }
    }
  };

  const addField = (newField: FormFieldState): void => {
    // Checks if field exists
    let fieldAlreadyPresent = fieldsInfo.find(
      (field) => field.key === newField.key
    );

    if (fieldAlreadyPresent)
      throw new Error("Error on adding new field: Field key already present.");

    setFieldsInfo((oldFields) => {
      fieldValidation(newField);
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

  const clearForm = () => {
    setFieldsInfo([]);
  };

  const internalOnValueChange = () => {
    if (onValueChangeCallback) onValueChangeCallback(fieldsInfo);
  };

  const onValueChange = (
    callback: (fields: Array<FormFieldState>) => void
  ): void => {
    setOnValueChangeCallback(() => callback);
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
  }, [fieldsInfo]);

  useEffect(() => {
    if (fieldsInfo.length !== 0 && !formInitialized) {
      setForminitialized(true);
    }
  }, [fieldsInfo]);

  const updateField = (
    key: string,
    updateModel: FormFieldUpdateModel
  ): void => {
    setFieldsInfo((oldFields) => {
      // Checks if field exists
      let field = fieldsInfo.find((field) => field.key === key);

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

        if (field.required !== updateModel.required) {
          field.required = updateModel.required ?? field.required;
        }

        return [...oldFields];
      } else throw new Error(`Error or updating field "${key}"`);
    });
  };

  /**
   * Determines if the provided field value can be considered as "emoty" or not.
   */
  const isEmpty = (value: any) => {
    if (!value) return true;

    if (Array.isArray(value) && value.length === 0) return true;

    return false;
  };

  const setValue = (key: string, newValue: any): void => {
    setFieldsInfo((oldFields) => {
      // Checks if field exists
      let field = fieldsInfo.find((field) => field.key === key);

      console.log("Fields", fieldsInfo);

      if (field) {
        field.error = "";

        let validationResult: boolean | string = true;

        console.log(field.required, field.key);
        if (field.required && isEmpty(newValue)) {
          validationResult = "Field is required";
          console.log(field.key, "is empty");
          field.value = newValue;
        }
        // If present, run validation
        else if (field.validate) {
          validationResult = field.validate(newValue);
        }

        if (validationResult === true || field.displayInvalidValue) {
          // Value is valid

          if (field.transform) {
            // If transform predicate is set, sanitizes the value through it
            field.value = field.transform(newValue);
          } else {
            field.value = newValue;
          }

          // Fires onChange event for the updated field
          internalOnKeyValueChanged(field.key, field);

          if (validationResult !== true) {
            let errorMessage =
              typeof validationResult === "string"
                ? validationResult
                : "Invalid value";

            field.error = errorMessage;
          }
        } else {
          // Value is not valid.
          // Determining if the default error message or a custom one has to be used
          let errorMessage =
            typeof validationResult === "string"
              ? validationResult
              : "Invalid value";

          field.error = errorMessage;
          console.log("Validation error:", errorMessage);
        }

        console.log(oldFields);

        return [...oldFields];
      } else
        throw new Error(`Error or setting new value field for key "${key}"`);

      // return [...oldFields];
    });
  };

  const enableSubmit = (newValue: boolean) => {
    setIsSubmitEnabled(newValue);
  };

  const setSubmitText = (newText: string) => {
    setSubmitButtonText(newText);
  };

  // Creates the final data mapping object
  const buildValuesObject = (): { [key: string]: any } => {
    let dataObject: { [key: string]: any } = {};

    fieldsInfo
      .filter((field) => {
        if (typeof field.active === "boolean") return field.active;

        if (field.active) return field.active(field.value, fieldsInfo);

        return true;
      })
      .forEach((field) => {
        dataObject[field.key] = field.value;
      });

    return dataObject;
  };

  const onSubmit = (
    callback: (formData: FormOnSubmitDataModel) => void | Promise<void>
  ) => {
    logicHandler.setOnSubmitCallback(callback);
  };

  const submit = async () => {
    let hasErrors = fieldsInfo.find((field) => field.error);

    if (!hasErrors) {
      if (logicHandler.onSubmitCallback as any)
        await logicHandler.onSubmitCallback({
          fields: fieldsInfo,
          values: buildValuesObject(),
        });
    }
  };

  const setSubmitButtonAlignment = (value: SubmitButtonAlignment) => {
    setSubmitAlignment(value);
  };

  // Returns a FormLogic object
  return {
    addField,
    removeField,
    clearForm,
    setValue,
    updateField,
    fields: fieldsInfo,
    onValueChange,
    onFieldValueChange,
    isSubmitEnabled,
    enableSubmit,
    submitButtonText,
    setSubmitText,
    submit,
    onSubmit,
    submitAlignment,
    formInitialized,
    setSubmitButtonAlignment,
  };
};
