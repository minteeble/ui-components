/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { FC } from "react";
import { StylableComponent } from "../../../models";
import { TextInputType } from "./TextInput";

export interface TextInputParams extends FormField {
  value: string;
  onValueChange: (newValue: string) => void;
  textInputType?: TextInputType;
}

export interface SelectParams extends FormField {
  options: Array<string>;
}

export interface ToggleParams extends FormField {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

export interface TextAreaParams extends FormField {
  value: string;
  onValueChange: (newValue: string) => void;
  resizable: boolean;
}

export interface DropZoneParams extends FormField {
  value: string;
  onValueChange: (newValue: string) => void;
}

export enum FormFieldType {
  TextInput,
  Select,
  Toggle,
  TextArea,
}

export enum FormFieldAlignment {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export interface FormField {
  value?: any;
  onValueChange?: (newValue: any) => void;
  errorMessage?: string;
  label?: string;
  fieldName: string;
  placeholder?: string;
  required?: boolean;

  type: FormFieldType;
  alignment?: FormFieldAlignment;

  sanitize?: (value: any) => boolean;

  isValid?: (value: any) => boolean | string;
}

export interface FormProps extends StylableComponent {
  elements: Array<FormField>;
  submitEnabled?: boolean;
  submitText?: string;
  onError?: (errors: Array<string | undefined>) => void;
  onSubmit?: (data: any) => void;
  editable?: boolean;
  isLoading?: boolean;
}
