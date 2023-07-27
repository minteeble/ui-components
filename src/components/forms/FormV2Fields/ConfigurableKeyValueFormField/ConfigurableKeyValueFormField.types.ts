import { FieldComponentProps, FormFieldState } from "../../FormV2/FormV2.types";

export interface ConfigurableKeyValueSubField {
  key: string;
  formFieldComponent: React.FC<FieldComponentProps>;
  attributes?: any;
}

export interface ConfigurableKeyValueFormFieldProps
  extends FieldComponentProps {
  attributes: {
    subFields: ConfigurableKeyValueSubField[];
  };
}
