import { FieldComponentProps, internalValue } from "../../FormV2/FormV2.types";

export interface RadioButtonsFormFieldAttributes {
  options: Array<string> | internalValue[];
}

export interface RadioButtonsFormFieldProps extends FieldComponentProps {
  attributes?: RadioButtonsFormFieldAttributes;
}
