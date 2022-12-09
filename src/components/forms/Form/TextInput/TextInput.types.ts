/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import {
  DisableableComponent,
  LoadableComponentProps,
  StylableComponent,
} from "../../../../models";
import { FormFieldAlignment } from "../Form.types";

export enum TextInputType {
  Text,
  Password,
  Email,
}

export interface TextInputProps
  extends StylableComponent,
    DisableableComponent,
    LoadableComponentProps {
  textInputType?: TextInputType;
  validator?: (text: string) => boolean;
  value: string;
  placeHolder?: string;
  errorMessage?: string;
  label?: string;
  alignment?: FormFieldAlignment;
  readonlyField?: boolean;

  onValueChange: (newValue: string) => void;
}
