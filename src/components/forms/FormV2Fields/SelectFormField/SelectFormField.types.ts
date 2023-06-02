import { FieldComponentProps, internalValue } from "../../FormV2/FormV2.types";
export interface SelectFormFieldAttributes {
  options: Array<string> | internalValue[];
  dropUp?: boolean;
}

export interface SelectFormFieldProps extends FieldComponentProps {
  attributes?: SelectFormFieldAttributes;
}
