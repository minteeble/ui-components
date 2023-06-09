import { FieldComponentProps } from "../../FormV2/FormV2.types";

export interface BooleanCheckboxFormFieldProps extends FieldComponentProps {
  attributes?: {
    checkboxText?: string;
  };
}
