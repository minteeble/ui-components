import { useState } from "react";
import { FormFieldState, FormLogic, UseFormV2Props } from "./FormV2.types";
import lodash from "lodash";

/**
 * Custom hook for handling Form V2 logic
 *
 * @param props Form V2 hook props
 * @returns Form logic
 */
export const useFormV2 = (props: UseFormV2Props): FormLogic => {
  const [fieldsInfo, setFieldsInfo] = useState<Array<FormFieldState>>([]);

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

  const setValue = (key: string, newValue: any): void => {
    setFieldsInfo((oldFields) => {
      let field = fieldsInfo.find((field) => field.key === key);
      if (field) {
        field.value = newValue;
      } else throw new Error(`Error or removing field.`);

      return [...oldFields];
    });
  };

  return { addField, removeField, setValue, fields: fieldsInfo };
};
