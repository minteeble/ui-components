/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { DisableableComponent, StylableComponent } from "../../../../models";

export interface ToggleProps extends StylableComponent, DisableableComponent {
  value: boolean;
  errorMessage?: string;
  label?: string;
  onValueChange: (newValue: boolean) => void;
  readonlyField?: boolean;
}
