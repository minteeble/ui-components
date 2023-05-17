import { FieldComponentProps } from "../../FormV2/FormV2.types";

export interface RadioButtonsFormFieldAttributes {
  options: Array<string>;
}

export interface RadioButtonsFormFieldProps extends FieldComponentProps {
  attributes?: RadioButtonsFormFieldAttributes;
}
