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
  ClassExtensible,
  ClickableComponent,
  ComponentSize,
} from "../../../models";

export interface IconButtonProps extends ClickableComponent, ClassExtensible {
  icon: any;
  size?: ComponentSize;
}
