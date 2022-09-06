/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { FC } from "react";
import { StylableComponent } from "../../../models";

export interface TextInputParams extends FormField {
  value: string;
  onValueChange: (newValue: string) => void;
}

export interface SelectParams extends FormField {
  options: Array<string>;
}

export enum FormFieldType {
  TextInput,
  Select,
}

export interface FormField {
  value?: any;
  onValueChange?: (newValue: any) => void;
  errorMessage?: string;
  label?: string;
  fieldName: string;
  placeholder?: string;

  type: FormFieldType;
}

export interface FormProps extends StylableComponent {
  elements: Array<FormField>;
  submitEnabled?: boolean;
  submitText?: string;
  onSubmit?: (data: any) => void;
}
