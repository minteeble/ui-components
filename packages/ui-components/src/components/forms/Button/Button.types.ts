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
  ClickableComponent,
  DisableableComponent,
  LoadableComponentProps,
} from "../../../models";

export enum ButtonActionType {
  Button,
  Anchor,
  Submit,
  Link,
}

export enum ButtonStyleType {
  Filled = 1,
  Danger,
}

export interface ButtonProps
  extends ClickableComponent,
    DisableableComponent,
    LoadableComponentProps {
  text: string;
  styleType?: ButtonStyleType;
  actionType?: ButtonActionType;
  url?: string;
}
