/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { faBan, faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import IconButton from "../IconButton";
import {
  ToggleParams,
  FormField,
  FormFieldType,
  FormProps,
  SelectParams,
  TextInputParams,
  TextAreaParams,
} from "./Form.types";
import Select from "./Select/Select";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import Toggle from "./Toggle";

export interface FieldState {
  value: any;
  onValueChange: (newValue: any) => void;
  originalFormField: FormField;
  errorMessage?: string;
}

const Form = (props: FormProps) => {
  const [fieldsState, setFieldsState] = useState<Array<FieldState>>([]);
  const [underEdit, setUnderEdit] = useState<boolean>(false);

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
              value: element.value || "",
              onValueChange: (newValue: any) => {
                let sanitized: boolean = true;
                console.log("ELement", element);
                if (element.sanitize) {
                  sanitized = element.sanitize(newValue);
                  console.log("Sanitized:", sanitized);
                }

                setFieldsState((s) => {
                  if (sanitized) s[i].value = newValue;

                  return [...s];
                });
              },
              originalFormField: element,
            };
          }

          if (element.type === FormFieldType.TextArea) {
            return {
              value: element.value || "",
              onValueChange: (newValue: any) => {
                let sanitized: boolean = true;
                console.log("ELement", element);
                if (element.sanitize) {
                  sanitized = element.sanitize(newValue);
                  console.log("Sanitized:", sanitized);
                }

                setFieldsState((s) => {
                  console.log("AAAAAA", s);
                  if (sanitized) s[i].value = newValue;

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
                let sanitized: boolean = true;

                if (element.sanitize) {
                  sanitized = element.sanitize(newValue);
                }

                setFieldsState((s) => {
                  if (sanitized) s[i].value = newValue;

                  return [...s];
                });
              },
              originalFormField: element,
            };
          }

          if (element.type === FormFieldType.Toggle) {
            return {
              value: element.value,

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
      let originalFormField = field.originalFormField as TextInputParams;

      console.log("Error", field.errorMessage);
      return (
        <TextInput
          value={field?.value}
          errorMessage={field.errorMessage}
          textInputType={originalFormField.textInputType}
          onValueChange={field?.onValueChange}
          label={field.originalFormField.label}
          alignment={field.originalFormField.alignment}
          placeHolder={field.originalFormField.placeholder}
          readonlyField={props.editable ? !underEdit : false}
        />
      );
    }

    if (field.originalFormField.type === FormFieldType.Select) {
      let originalFormField = field.originalFormField as SelectParams;

      return (
        <Select
          options={originalFormField.options}
          value={field?.value}
          errorMessage={field.errorMessage}
          onValueChange={field?.onValueChange}
          label={field.originalFormField.label}
          placeHolder={field.originalFormField.placeholder}
          readonlyField={props.editable ? !underEdit : false}
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
          readonlyField={props.editable ? !underEdit : false}
        />
      );
    }

    if (field.originalFormField.type === FormFieldType.TextArea) {
      let originalFormField = field.originalFormField as TextAreaParams;

      console.log("Error", field.errorMessage);
      return (
        <TextArea
          onValueChange={field?.onValueChange}
          value={field?.value}
          errorMessage={field.errorMessage}
          label={field.originalFormField.label}
          placeHolder={field.originalFormField.placeholder}
          resizable={originalFormField.resizable}
          readonlyField={props.editable ? !underEdit : false}
        />
      );
    }
  });
  return (
    <form
      className="form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();

        let data = {} as Record<string, any>;

        fieldsState.forEach((field) => {
          if (field) {
            data[field.originalFormField.fieldName] = field.value;
          }
        });

        setFieldsState((fields) => {
          fields.forEach((field) => (field.errorMessage = undefined));

          return [...fields];
        });

        if (props.onSubmit) {
          let canSubmit = true;
          let updatedFieldState: FieldState[] = fieldsState;

          fieldsState.forEach((field, fieldIndex) => {
            if (field.originalFormField.isValid) {
              console.log("Validating:", field);
              let isValidResponse = field.originalFormField.isValid(
                field.value
              );

              if (isValidResponse !== true) {
                canSubmit = false;

                setFieldsState((fields) => {
                  fields[fieldIndex].errorMessage =
                    (isValidResponse as string) || "Invalid input.";

                  updatedFieldState = [...fields];
                  return [...fields];
                });
              }
            }
          });

          fieldsState.forEach((field, fieldIndex) => {
            if (field.originalFormField.required && !field.value) {
              canSubmit = false;

              setFieldsState((fields) => {
                fields[fieldIndex].errorMessage = "Field required.";

                updatedFieldState = [...fields];
                return [...fields];
              });
            }
          });

          if (canSubmit) {
            props.onSubmit(data);
          } else if (props.onError) {
            props.onError(updatedFieldState.map((field) => field.errorMessage));
          }
        }
      }}
    >
      {elements.map((elem) => (typeof elem !== "undefined" ? elem : <></>))}
      <div className="form-toolbar">
        {props.editable && (
          <IconButton
            icon={
              <FontAwesomeIcon
                icon={underEdit ? faBan : faPencil}
                onClick={(e) => {
                  e.preventDefault();
                  setUnderEdit(!underEdit);
                }}
              />
            }
            //
          />
        )}
        {props.submitEnabled && <Button text={props.submitText || "Submit"} />}
      </div>
    </form>
  );
};

export default Form;
