/**
 * Form V2 Hook props object
 */
export interface UseFormV2Props {}

export interface FieldComponentProps {
  value: any;
  key: string;
  label: string;
  setValue: (newValue: any) => void;
  formData: FormInjectedData;
  placeholder?: string;
  attributes?: any;
  transform?: (value: any) => any;
  validate?: (value: any) => boolean;
}

export interface FormFieldState {
  key: string;
  value: any;
  label: string;
  placeholder?: string;
  type: string;
  attributes?: any;
  fieldComponent?: React.FC<FieldComponentProps>;
  transform?: (value: any) => any;
  validate?: (value: any) => boolean;
}

export interface FormFieldInternalState extends FormFieldState {
  formLogic: FormLogic;
}

export interface FormInjectedData {
  fields: Array<FormFieldState>;
}

/**
 * Form V2 logic object
 */
export interface FormLogic {
  addField: (newField: FormFieldState) => void;

  removeField: (key: string) => void;

  setValue: (key: string, newValue: any) => void;

  fields: Array<FormFieldState>;

  onValueChange: (callback: (fields: Array<FormFieldState>) => void) => void;

  onFieldValueChange: (
    key: string,
    callback: (field: FormFieldState) => void
  ) => void;
}

/**
 * Form V2 props object
 */
export interface FormV2Props {
  formLogic: FormLogic;
}
