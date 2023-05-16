import { Component } from "react";

/**
 * Form V2 Hook props object
 */
export interface UseFormV2Props {}

export interface FieldComponentProps {
  value: any;
  key: string;
  setValue: (newValue: any) => void;
  formData: FormInjectedData;
}

export interface FormFieldState {
  key: string;
  value: any;
  type: string;
  fieldComponent?: React.FC<FieldComponentProps>;
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
}

/**
 * Form V2 props object
 */
export interface FormV2Props {
  formLogic: FormLogic;
}
