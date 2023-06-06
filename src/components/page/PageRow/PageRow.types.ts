/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { ParentComponent, StylableComponent } from "../../../models";

export enum PageRowAlignment {
  Start,
  Center,
  End,
  Stretch,
}

export interface PageRowProps extends ParentComponent, StylableComponent {
  alignment?: PageRowAlignment;
  className?: string;
}
