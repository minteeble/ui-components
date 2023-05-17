import { FieldComponentProps } from "../../FormV2/FormV2.types";

/**
 * Custom attributes model for checkbox field
 */
export interface CheckboxButtonsFormFieldAttributes {
  /**
   * Checkbox options list
   */
  options: Array<string>;
}

/**
 * Props model for checkbox form field
 */
export interface CheckboxButtonsFormFieldProps extends FieldComponentProps {
  attributes?: CheckboxButtonsFormFieldAttributes;

  /**
   * Array of current values (options)
   */
  value: Array<string>;
}
