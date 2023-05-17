import { FieldComponentProps } from "../../FormV2/FormV2.types";

export interface CheckboxButtonsFormFieldAttributes {
  options: Array<string>;
}

export interface CheckboxButtonsFormFieldProps extends FieldComponentProps {
  attributes?: CheckboxButtonsFormFieldAttributes;

  value: Array<string>;
}
