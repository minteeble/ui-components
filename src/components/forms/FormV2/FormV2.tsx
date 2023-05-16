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

export const FormV2 = (props: FormV2Props) => {
  let formLogic = props.formLogic;

  let formData: FormInjectedData = {
    fields: formLogic.fields,
  };

  return (
    <div>
      {formLogic.fields.map((fieldInfo) => {
        if (fieldInfo.fieldComponent) {
          const FieldComponent = fieldInfo.fieldComponent;

          return (
            <FieldComponent
              value={fieldInfo.value}
              setValue={(newValue: any) => {
                console.log("Setting new value", newValue);
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
      })}
    </div>
  );
};
