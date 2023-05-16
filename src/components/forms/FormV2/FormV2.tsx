/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { FormInjectedData, FormV2Props } from "./FormV2.types";
import React from "react";

/**
 * Form V2
 *
 * @param props FormV2 props object
 * @returns FormV2 React component
 */
export const FormV2 = (props: FormV2Props) => {
  let formLogic = props.formLogic;

  let formData: FormInjectedData = {
    fields: formLogic.fields,
  };

  // Creates a list of field components ready to be rendered
  let fieldsComponentsList = formLogic.fields.map((fieldInfo) => {
    if (fieldInfo.fieldComponent) {
      // Mapping field component into a React component compliant variable (it should be capitalized)
      const FieldComponent = fieldInfo.fieldComponent;

      return (
        <FieldComponent
          value={fieldInfo.value}
          setValue={(newValue: any) => {
            formLogic.setValue(fieldInfo.key, newValue);
          }}
          key={fieldInfo.key}
          placeholder={fieldInfo.placeholder}
          label={fieldInfo.label}
          attributes={fieldInfo.attributes}
          formData={formData}
        />
      );
    }
  });

  return <div className="form-v2">{fieldsComponentsList}</div>;
};
