/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

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
  validate?: (value: any) => boolean | string;
  displayInvalidValue?: boolean;
  readOnly?: boolean;
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
