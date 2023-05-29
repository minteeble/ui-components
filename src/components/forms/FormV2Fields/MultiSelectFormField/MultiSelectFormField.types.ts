import { FieldComponentProps, internalValue } from "../../FormV2/FormV2.types";

export interface MultiSelectFormFieldProps extends FieldComponentProps {
  /**
   * Multi Select custom props
   */
  attributes?: {
    /**
     * Multi Select Options
     */
    options?: string[] | internalValue[];
    /**
     * Allow to write custom values. False by default
     */
    customSelectEnabled?: boolean;
  };
}
