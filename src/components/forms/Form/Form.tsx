/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React, { useEffect, useState } from "react";
import Button from "../Button";
import {
  ToggleParams,
  FormField,
  FormFieldType,
  FormProps,
  SelectParams,
} from "./Form.types";
import Select from "./Select/Select";
import TextInput from "./TextInput";
import Toggle from "./Toggle";

export interface FieldState {
  value: any;
  onValueChange: (newValue: any) => void;
  originalFormField: FormField;
}

const Form = (props: FormProps) => {
  let [fieldsState, setFieldsState] = useState<Array<FieldState>>([]);

  let submitEnabled = props.submitEnabled || true;

  useEffect(() => {
    console.log(fieldsState);
  }, [fieldsState]);

  useEffect(() => {
    setFieldsState(
      props.elements
        .map((element, i) => {
          if (element.type === FormFieldType.TextInput) {
            return {
              value: "",
              onValueChange: (newValue: any) => {
                setFieldsState((s) => {
                  s[i].value = newValue;

                  return [...s];
                });
              },
              originalFormField: element,
            };
          }

          if (element.type === FormFieldType.Select) {
            return {
              value: "",

              onValueChange: (newValue: any) => {
                console.log("Here");
                setFieldsState((s) => {
                  s[i].value = newValue;

                  return [...s];
                });
              },
              originalFormField: element,
            };
          }

          if (element.type === FormFieldType.Toggle) {
            return {
              value: "",

              onValueChange: (newValue: any) => {
                setFieldsState((s) => {
                  s[i].value = newValue;

                  return [...s];
                });
              },
              originalFormField: element,
            };
          }

          return {
            value: "",
            onValueChange: (newValue: any) => {},
            originalFormField: element,
          };
        })
        .filter((elem) => elem)
    );
  }, []);

  let elements = fieldsState.map((field) => {
    if (field.originalFormField.type === FormFieldType.TextInput) {
      return (
        <TextInput
          value={field?.value}
          onValueChange={field?.onValueChange}
          label={field.originalFormField.label}
          placeHolder={field.originalFormField.placeholder}
        />
      );
    }

    if (field.originalFormField.type === FormFieldType.Select) {
      let originalFormField = field.originalFormField as SelectParams;

      return (
        <Select
          options={originalFormField.options}
          value={field?.value}
          onValueChange={field?.onValueChange}
          label={field.originalFormField.label}
          placeHolder={field.originalFormField.placeholder}
        />
      );
    }

    if (field.originalFormField.type === FormFieldType.Toggle) {
      let originalFormField = field.originalFormField as ToggleParams;

      return (
        <Toggle
          value={field?.value}
          onValueChange={field?.onValueChange}
          label={field.originalFormField.label}
        />
      );
    }
  });
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();

        let data = {} as Record<string, any>;

        fieldsState.forEach((field) => {
          if (field) {
            data[field.originalFormField.fieldName] = field.value;
          }
        });

        if (props.onSubmit) {
          let canSubmit = true;
          fieldsState.forEach((field) => {
            if (field.originalFormField.required && !field.value)
              canSubmit = false;
          });

          if (canSubmit) props.onSubmit(data);
        }
      }}
    >
      {elements.map((elem) => (typeof elem !== "undefined" ? elem : <></>))}
      <div className="form-toolbar">
        {submitEnabled && <Button text={props.submitText || "Submit"} />}
      </div>
    </form>
  );
};

export default Form;
